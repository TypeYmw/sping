/*
 * @Author: yangmw yangmw@91160.com
 * @Date: 2022-08-15 20:06:29
 * @LastEditors: yangmw yangmw@91160.com
 * @LastEditTime: 2022-09-02 14:02:28
 * @Description: proxy 代理配置
 */
import proxyHandler, { ApiProxy } from '../utils/proxy-process';

/** 自定义配置，格式参考 ApiProxy
 *  前面的key是一个字符串，记录一个域名，也就是后面的路径需要跳转的地方
 *  后面的值可以是字符串，也可以是 ProxyOptions 对象。
 *  例如：'https://nykj.91160.com': '/index.php' 就是将 /index.php 路径代理到 https://nykj.91160.com 这下面
 */
const customConfig: ApiProxy = {
  'https://nykj.91160.com/index.php?c=GoApi&a=call&uri=': [
    '/shop_manager_inside',
    '/service_config_inside',
    '/commerce-inside',
    '/shop_unit_inside',
  ]
};

export default proxyHandler(customConfig);

