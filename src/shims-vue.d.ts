/*
 * @Author: ShenLing
 * @Date: 2021-06-28 16:41:52
 * @LastEditors: ShenLing
 * @LastEditTime: 2021-07-01 13:44:24
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json'{
  const value:any;
  export default value;
}

declare module 'three'
declare module 'three/examples/jsm/libs/dat.gui.module'
