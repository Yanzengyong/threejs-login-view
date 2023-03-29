## 一个3D效果的登陆页面

## 预览

![login2.gif](src/assets/images/login.gif)

## 运行项目
Three.js and Vue.js Integration

This project demonstrates how to integrate Three.js and Vue.js, two popular JavaScript libraries, to create interactive and dynamic 3D graphics in a Vue.js application.

Getting Started
To run this project, follow these steps:

Clone the repository to your local machine.
Install the dependencies using npm install.
Start the development server using npm run serve.
Built With
Three.js - A JavaScript library used to create and display animated 3D computer graphics in a web browser.
Vue.js - A progressive framework for building user interfaces.
Vue Three.js - A Vue.js plugin for using Three.js.
Usage

To use Three.js in a Vue.js component, you first need to install the vue-threejs plugin. You can do this using npm:
npm install vue-threejs

You can do this using yarn:
yarn add vue-threejs

Next, import the VueThreeJS plugin in your Vue.js component:
import VueThreeJS from 'vue-threejs';

Now you can use the VueThreeJS component to render a Three.js scene:
<template>
  <VueThreeJS>
    <three-scene>
      <three-perspective-camera :position="{ x: 0, y: 0, z: 10 }"></three-perspective-camera>
      <three-mesh :geometry="sphereGeometry" :material="sphereMaterial"></three-mesh>
    </three-scene>
  </VueThreeJS>
</template>

<script>
import VueThreeJS from 'vue-threejs';
import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

export default {
  components: {
    VueThreeJS,
  },
  data() {
    return {
      sphereGeometry: new SphereGeometry(5),
      sphereMaterial: new MeshBasicMaterial({ color: 0xff0000 }),
    };
  },
  components: {
    VueThreeJS,
    ThreeScene,
    ThreePerspectiveCamera,
    ThreeMesh,
  },
};
</script>

License
This project is licensed under the MIT License - see the LICENSE file for details.

```shell
git clone https://github.com/Yanzengyong/threejs-login-view.git

yarn

yarn serve
```
