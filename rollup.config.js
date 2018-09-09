/**
 * Created by slipkinem on 2018/9/9 at 下午3:55.
 */

export default {
  input: 'lib/bindings.js',
  name: 'VueRxClass',
  output: {
    file: 'lib/bindings.umd.js',
    format: 'umd'
  },
  external: [
    'vue', 'vue-class-component'
  ],
  exports: 'named',
  name: 'vue-rx-class',
  globals: {
    'vue': 'Vue',
    'vue-class-component': 'VueClassComponent'
  }
}
