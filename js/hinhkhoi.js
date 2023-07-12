import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {TeapotGeometry} from 'three/examples/jsm/geometries/TeapotGeometry.js'

import { GUI } from 'dat.gui'
// import {cube, sphere, cone, cylinder, teapot, wheel} from './geometry';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

// Generate Geometry
var geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
let material = new THREE.MeshNormalMaterial({wireframe:true });
// let material = new THREE.PointsMaterial({size: 15, vertexColors: true})
var cube = new THREE.Mesh(geometry, material);

var geometry = new THREE.SphereGeometry(0.75);
var sphere = new THREE.Mesh(geometry, material);

var geometry = new THREE.ConeGeometry(1,2,32);
var cone = new THREE.Mesh(geometry, material);

var geometry = new THREE.CylinderGeometry( 1, 1, 2, 32 ); 
var cylinder = new THREE.Mesh( geometry, material);

var geometry = new TeapotGeometry(1,1,1);

var teapot = new THREE.Mesh( geometry, material);
var geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
// var material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var wheel = new THREE.Mesh(geometry, material);
// Set position of geometries
sphere.position.set(5,0,0);
cone.position.set(-5,0,0);
cylinder.position.set(-10,0,0);
teapot.position.set(0,5,0);
wheel.position.set(5,5,0)
scene.add(cube);
scene.add(sphere);
scene.add(cone);
scene.add(cylinder);
scene.add(teapot);
scene.add(wheel);

const gui = new GUI()
const cubeFolder = gui.addFolder('Cube')
const cubeRotationFolder = cubeFolder.addFolder('Rotation')
cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01)
cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01)
cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01)
const cubePositionFolder = cubeFolder.addFolder('Position')
cubePositionFolder.add(cube.position, 'x', -10, 10)
cubePositionFolder.add(cube.position, 'y', -10, 10)
cubePositionFolder.add(cube.position, 'z', -10, 10)
const cubeScaleFolder = cubeFolder.addFolder('Scale')
cubeScaleFolder
    .add(cube.scale, 'x', -5, 5, 0.1)
    .onFinishChange(() => console.dir(cube.geometry))
cubeScaleFolder.add(cube.scale, 'y', -5, 5, 0.1)
cubeScaleFolder.add(cube.scale, 'z', -5, 5, 0.1)
cubeFolder.add(cube, 'visible', true)
cubeFolder.open()

const cubeData = {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
}
const cubePropertiesFolder = cubeFolder.addFolder('Properties')
cubePropertiesFolder
    .add(cubeData, 'width', 1, 30)
    .onChange(regenerateBoxGeometry)
    .onFinishChange(() => console.dir(cube.geometry))
cubePropertiesFolder
    .add(cubeData, 'height', 1, 30)
    .onChange(regenerateBoxGeometry)
cubePropertiesFolder
    .add(cubeData, 'depth', 1, 30)
    .onChange(regenerateBoxGeometry)
cubePropertiesFolder
    .add(cubeData, 'widthSegments', 1, 30)
    .onChange(regenerateBoxGeometry)
cubePropertiesFolder
    .add(cubeData, 'heightSegments', 1, 30)
    .onChange(regenerateBoxGeometry)
cubePropertiesFolder
    .add(cubeData, 'depthSegments', 1, 30)
    .onChange(regenerateBoxGeometry)

function regenerateBoxGeometry() {
    const newGeometry = new THREE.BoxGeometry(
        cubeData.width,
        cubeData.height,
        cubeData.depth,
        cubeData.widthSegments,
        cubeData.heightSegments,
        cubeData.depthSegments
    )
    cube.geometry.dispose()
    cube.geometry = newGeometry
}
//--//
const sphereFolder = gui.addFolder('Sphere');
const sphereRotationFolder = sphereFolder.addFolder('Rotation');
sphereRotationFolder.add(sphere.rotation, 'x', 0, Math.PI * 2, 0.01);
sphereRotationFolder.add(sphere.rotation, 'y', 0, Math.PI * 2, 0.01);
sphereRotationFolder.add(sphere.rotation, 'z', 0, Math.PI * 2, 0.01);

const spherePositionFolder = sphereFolder.addFolder('Position');
spherePositionFolder.add(sphere.position, 'x', -10, 10);
spherePositionFolder.add(sphere.position, 'y', -10, 10);
spherePositionFolder.add(sphere.position, 'z', -10, 10);

const sphereScaleFolder = sphereFolder.addFolder('Scale');
sphereScaleFolder
    .add(sphere.scale, 'x', -5, 5, 0.1)
    .onFinishChange(() => console.dir(sphere.geometry));
sphereScaleFolder.add(sphere.scale, 'y', -5, 5, 0.1);
sphereScaleFolder.add(sphere.scale, 'z', -5, 5, 0.1);

sphereFolder.add(sphere, 'visible', true);
sphereFolder.open();

const sphereData = {
    radius: 1,
    widthSegments: 8,
    heightSegments: 6,
    phiStart: 0,
    phiLength: Math.PI * 2,
    thetaStart: 0,
    thetaLength: Math.PI,
};

const spherePropertiesFolder = sphereFolder.addFolder('Properties');
spherePropertiesFolder
    .add(sphereData, 'radius', 1, 30)
    .onChange(regenerateSphereGeometry)
    .onFinishChange(() => console.dir(sphere.geometry));
spherePropertiesFolder
    .add(sphereData, 'widthSegments', 1, 30)
    .onChange(regenerateSphereGeometry);
spherePropertiesFolder
    .add(sphereData, 'heightSegments', 1, 30)
    .onChange(regenerateSphereGeometry);
spherePropertiesFolder
    .add(sphereData, 'phiStart', 0, Math.PI * 2)
    .onChange(regenerateSphereGeometry);
spherePropertiesFolder
    .add(sphereData, 'phiLength', 0, Math.PI * 2)
    .onChange(regenerateSphereGeometry);
spherePropertiesFolder
    .add(sphereData, 'thetaStart', 0, Math.PI)
    .onChange(regenerateSphereGeometry);
spherePropertiesFolder
    .add(sphereData, 'thetaLength', 0, Math.PI)
    .onChange(regenerateSphereGeometry);

function regenerateSphereGeometry() {
    const newGeometry = new THREE.SphereGeometry(
        sphereData.radius,
        sphereData.widthSegments,
        sphereData.heightSegments,
        sphereData.phiStart,
        sphereData.phiLength,
        sphereData.thetaStart,
        sphereData.thetaLength
    );
    sphere.geometry.dispose();
    sphere.geometry = newGeometry;
}

const options = {
	wireframe: material.wireframe
}
gui.add(options,"wireframe").onChange(function(e){
	material.wireframe = e
})

camera.position.set( 0, 0, 10 );
controls.update();
function animate(time) {
	requestAnimationFrame( animate );
    // shiba.rotation.y = -time/3000;
	cube.rotation.x += 0.01;
	cube.rotation.z += 0.01;

	sphere.rotation.y += 0.01;
	cone.rotation.y -= 0.01;
	cylinder.rotation.y -= 0.01;
	wheel.rotation.y += 0.01;
    controls.update();
	renderer.render( scene, camera );
}

animate();
// export{scene, renderer}