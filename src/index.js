import './index.css'
// import jpg from './images/image.jpg'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import gsap from 'gsap';

// document.addEventListener('DOMContentLoaded', () => {
//   const image = new Image()
//   image.src = jpg
//   document.querySelector('.images').appendChild(image)

//   console.log("hello")

//   //
//   //tracks
//   //Переменные, отвечающие за пути к моделькам
//   var traks = {
//     "model_01": "images//models/scene.gltf",
//     "model_02": "images//models/scene(1).gltf"
//   };

//   //Меняем по клику модельку
//   $("#second_knight").click(function(){
//     traks = { "current": "model_02" }; 
//     console.log("hello")
//     //сюда можно лоад
//     //и анлоадить можно(если будет проблема что уже что-то загружено)
//   });
  


//   // Canvases
//   const canvas = document.querySelector('canvas.webgl')

//   // sizes 
//   const sizes = {
//     w: window.innerWidth,
//     h: window.innerHeight
//   };


//   //resize
//   window.addEventListener('resize', () =>
//   {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.w / sizes.h
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.w, sizes.h)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   })


//   //Scene
//   const scene = new THREE.Scene();



//   /**
//    * Lights
//    */
//   const ambientLight = new THREE.AmbientLight(0xffffff, 5)
//   scene.add(ambientLight)

//   const directionalLight = new THREE.DirectionalLight(0xffffff, 1.6)
//   directionalLight.castShadow = true
//   directionalLight.shadow.mapSize.set(1024, 1024)
//   directionalLight.shadow.camera.far = 15
//   directionalLight.shadow.camera.left = - 7
//   directionalLight.shadow.camera.top = 7
//   directionalLight.shadow.camera.right = 7
//   directionalLight.shadow.camera.bottom = - 7
//   directionalLight.position.set(- 5, 5, 0)
//   scene.add(directionalLight)



//   //
//   //camera
//   //

//   const camera = new THREE.PerspectiveCamera( 60, sizes.w / sizes.h, 0.1, 1000 );
//   camera.position.x = 18;
//   camera.position.y = 3;
//   camera.position.z = -0.5;



//   //material and geo
//   const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//   const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );



//   //GLTFLoader
//   const gltfLoader = new GLTFLoader()
//   let mixer = null

//   gltfLoader.load(
//     traks ["model_01"],
//       (gltf) =>
//       {
//         gltf.scene.scale.set(15, 15, 15)
//         scene.add(gltf.scene)
//       }
//   );



//   //
//   //renders
//   //
//   const renderer1 = new THREE.WebGLRenderer(
//     {canvas: canvas,
//       alpha: true,
//     }
//   );
//   renderer1.setSize( sizes.w , sizes.h );



//   //controls
//   const controls = new OrbitControls(camera, canvas)
//   controls.enableDamping = true
//   controls.enabled = true



//   //clock
//   const clock = new THREE.Clock()
//   let oldElapsedTime = 0


  
//   //animationn
//   const tick = () => {


//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - oldElapsedTime
//     oldElapsedTime = elapsedTime
//     controls.update()
//     renderer1.render(scene, camera)
//     window.requestAnimationFrame(tick)
//   }
//   tick()
// })

