import type { App } from "vue";
import {
  Button
} from 'vant'

export default (app: App<Element>) => {
  app.use(Button)
}