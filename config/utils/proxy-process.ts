import { ProxyOptions } from 'vite';
/** 目标格式，也就是系统能过识别的格式 */
export type ProxyConfig = Record<string, string | ProxyOptions>

/** 当前自定义配置输出的 proxy 格式 */
export interface ApiProxy {
  [host: string]: string | Array<string> | WholeProxy | Array<WholeProxy | string>
}

/** 当前的配置格式，不需要target */
export interface WholeProxy extends Omit<ProxyOptions, 'target'> {
  baseUrl: string;
}

/** 常见的公共配置，可以通过自定义配置覆盖 */
const defaultConfig: ProxyOptions = Object.freeze({
  changeOrigin: true,
  secure: false
});

/** 代理处理函数，返回系统所需要的格式 */
export const proxyHandler: (proxy: ApiProxy) => ProxyConfig = (proxy) => {
  const config: ProxyConfig = {};

  for (const [key, val] of Object.entries(proxy)) {
    if (typeof val === 'string') {
      const { key: keyVal, ...configItem } = processFactory(config, key, val);
      config[keyVal] = configItem;
      continue;
    }
    if (Array.isArray(val)) {
      val.forEach(item => {
        const { key: valKey, ...configItem } = processFactory(config, key, item);
        config[valKey] = configItem;
      });
    }
  }
  console.log('config', config);
  return config;
};

/** 根据配置的类型返回所需要的配置对象 */
const processFactory: (config: ProxyConfig, key: string, val: any) => ProxyOptions & { key: string } = (config, key, val) => {
  const tErr = (baseUrl: string) => {
    throw new Error('代理配置项重复：' + baseUrl);
  };
  // 处理字符串的时候
  if (typeof val === 'string') {
    // 如果存在这个配置想，报错提示
    if (config[val]) tErr(val);
    return {
      key: val,
      target: key,
      ...defaultConfig
    };
  }
  // 处理对象的时候
  if (Object.prototype.toString.call(val) === '[object Object]') {
    // 将baseUrl 和 其他配置 分开
    const { baseUrl, ...other } = val;
    if (config[baseUrl as string]) tErr(val.baseUrl as string);
    return {
      key: val.baseUrl,
      target: key,
      ...defaultConfig,
      ...other
    };
  }

  return {};
};

export default proxyHandler;
