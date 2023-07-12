import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'dat.gui'
import {scene} from "./script.js"
//----------------------------LIGHT SETUP----------------------------//
const al = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(al);
const light = new THREE.DirectionalLight()
scene.add(light)
light.castShadow = true
const helper = new THREE.DirectionalLightHelper(light)
scene.add(helper)

const data = {
    color: light.color.getHex(),
    mapsEnabled: true,
}
const gui = new GUI()
const lightFolder = gui.addFolder('THREE.Light')
lightFolder.addColor(data, 'color').onChange(() => {
    light.color.setHex(Number(data.color.toString().replace('#', '0x')))
})
lightFolder.add(light, 'intensity', 0, 1, 0.01)

const directionalLightFolder = gui.addFolder('THREE.DirectionalLight')
directionalLightFolder.add(light.position, "x", -100, 100, 0.01)
directionalLightFolder.add(light.position, "y", -100, 100, 0.01)
directionalLightFolder.add(light.position, "z", -100, 100, 0.01)
directionalLightFolder.open()

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
//renderer.shadowMap.type = THREE.BasicShadowMap
//renderer.shadowMap.type = THREE.PCFShadowMap
//renderer.shadowMap.type = THREE.VSMShadowMap
document.body.appendChild(renderer.domElement)