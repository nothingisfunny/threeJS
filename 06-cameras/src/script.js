import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Cursor
const cursor = {x: 0, y: 0}
window.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / sizes.width - 0.5
  cursor.y = -(e.clientY / sizes.height - 0.5)
  // console.log(cursor)
  // console.log(e.clientX, e.clientY) // pixel values
})

//Base

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: 800,
  height: 600
}

 const aspectRatio = sizes.width / sizes.height;

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
// console.log(camera.position.length())

// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100) // adjust by aspect ratio to avoid shape distortion

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2

camera.lookAt(mesh.position)
scene.add(camera)

// Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  // controls.target.y = 2
  // controls.update()

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  // mesh.rotation.y = elapsedTime;

  // Update camera
  // // move object with camera
  // camera.position.x = cursor.x * 10
  // camera.position.y = cursor.y * 10
  // //  move the camera to look at the sides of the cube
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
  // camera.position.y = cursor.y * 5
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
  // camera.lookAt(mesh.position)

  // Update controls
  controls.update()
  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()