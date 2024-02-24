import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
// Position (vector 3)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1) // same as above in one command

// Scale (vector 3)
mesh.scale.set(2, 0.5, 0.5)

// Rotation (euler)
mesh.rotation.reorder('YXZ') // change order of axis rotation - first rotate on y then on x etc.
mesh.rotation.set(Math.PI*.25, Math.PI*.25, 0) // pi 3.14159 is half rotation

// Axes Helper
const axesHelper = new THREE.AxesHelper()

scene.add(mesh)
scene.add(axesHelper)

// mesh.position.normalize() // reduce vector length (between the center of the scene and object's position) to 1
// console.log(mesh.position.length()) // distance between the center of the scene and object's position

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// LookAt
camera.lookAt(new THREE.Vector3(3, 0, 1 ))
camera.lookAt(mesh.position) // look straight at the cube
 
// console.log(mesh.position.distanceTo(camera.position)) // distance from object to camera

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
