/**
 * @desc 生成总路由
 * @param context
 * @param ignore
 */
 export const getRoutes = (context: any, ignore: any) => {
  const children: any = [];
  Object.keys(context).forEach(key => {
    if (!ignore.includes(key)) {
      try {
        const arr = context[key].default;
        if (arr && arr.length) {
          children.push(...arr);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });
  return children;
};