/**
 * vue-rx-class
 * Created by slipkinem on 2018/9/8 at 上午10:33.
 */
import { createDecorator } from 'vue-class-component'

export const domStream = () => {
  return createDecorator((componentOptions, key) => {
    console.log(componentOptions, key)
    if (!componentOptions.domStreams) {
      componentOptions.domStreams = []
    }
    componentOptions.domStreams.push(key)
  })
}

export const subscription = (key?: string | symbol) => {
  return createDecorator((componentOptions, k) => {
    let provide: any = componentOptions.subscriptions
    if (typeof provide !== 'function' || !provide.managed) {
      componentOptions.subscriptions = function (this: any) {
        return this[k]()
      }
    }
  })
}
