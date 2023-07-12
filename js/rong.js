import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'dat.gui'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

//---//--//--//
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const loader = new GLTFLoader();
loader.load(
	'./assets/dragon/scene.gltf',
	function ( gltf ) {
        const shiba = gltf.scene;
		shiba.receiveShadow = true
		scene.add(shiba);
        console.log(shiba.getObjectByName)
        // shiba.getObjectByName("Group18985_default_0").material.color.setHex(0x00FF00);
        // shiba.getObjectByName("Box002_default_0").material.color.setHex(0xFFFFFF);

	});	
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
const objectloader = new OBJLoader();
objectloader.load(
	'./assets/Mech_RaeTheRedPanda.obj',
	function ( object ) {
		// scene.add( object );
        // shiba.getObjectByName("Group18985_default_0").material.color.setHex(0x00FF00);
        // shiba.getObjectByName("Box002_default_0").material.color.setHex(0xFFFFFF);

	});

// //----------------------------LIGHT SETUP----------------------------//
const al = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(al);
const light = new THREE.DirectionalLight()
scene.add(light)
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
//---render---//
camera.position.set( 0, -20, 20 );
controls.update();
function animate(time) {
	requestAnimationFrame( animate );
    // shiba.rotation.y = -time/3000;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    controls.update();
	renderer.render( scene, camera );
}

animate();
export{scene}