import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 3

scene.background = new THREE.Color("#04151F")


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.addEventListener("change", render)

const geometry = new THREE.TorusGeometry
const material = new THREE.MeshBasicMaterial({
    color: "#f2cc8f"
    //wireframe: true,
})

const object = new THREE.Mesh(geometry, material)
scene.add(object)


window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)


    render()
}

function render() {
    renderer.render(scene, camera)
}

// animate()
render()