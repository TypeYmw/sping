import type { ManualChunksOption } from "rollup";

export default (): ManualChunksOption => ({
  'vendor.vuelibs': ['vue', 'vue-router'],
  'vendor.vant': ['vant'],
  'home': []
})
