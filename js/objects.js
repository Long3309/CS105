import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GUI } from 'dat.gui'
import * as SkeletonUtils from  'three/examples/jsm/utils/SkeletonUtils'
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(10, 15, -22);

orbit.update();

const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        visible: true
    })
);
planeMesh.rotateX(-Math.PI / 2);
scene.add(planeMesh);

const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

const highlightMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: false
        })
);
highlightMesh.rotateX(-Math.PI / 2);
highlightMesh.position.set(0.5, 0, 0.5);
scene.add(highlightMesh);

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;

window.addEventListener('mousemove', function(e) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mousePosition, camera);
    intersects = raycaster.intersectObject(planeMesh);
    if(intersects.length > 0) {
        const intersect = intersects[0];
        const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
        highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);

        const objectExist = objects.find(function(object) {
            return (object.position.x === highlightMesh.position.x)
            && (object.position.z === highlightMesh.position.z)
        });

        if(!objectExist)
            highlightMesh.material.color.setHex(0xFFFFFF);
        else
            highlightMesh.material.color.setHex(0xFF0000);
    }
});

let stag, mixer;
let clips;
const loader = new GLTFLoader();
loader.load(
	'./assets/dragon/scene.gltf',
	function ( gltf ) {
        const model = gltf.scene;
        gltf.scene.getObjectByName("Plane").visible = false
        model.scale.set(0.8,0.8,0.8);
        model.position.set(0,2,0)
		// scene.add(model);
        clips = gltf.animations;
        // const mixer = new THREE.AnimationMixer(model);
        // clips.forEach(function(clip){
        //     const action = mixer.clipAction(clip);
        //     action.play()
        // })
        stag = model;
        console.log(model.getObjectByName)

	});	
const objects = [];
const mixers = [];

window.addEventListener('mousedown', function() {
    const objectExist = objects.find(function(object) {
        return (object.position.x === highlightMesh.position.x)
        && (object.position.z === highlightMesh.position.z)
    });

    if(!objectExist) {
        if(intersects.length > 0) {
            const stagClone = SkeletonUtils.clone(stag);
            stagClone.position.copy(highlightMesh.position);
            scene.add(stagClone);
            objects.push(stagClone);
            highlightMesh.material.color.setHex(0xFF0000);
            const mixer = new THREE.AnimationMixer(stagClone);
            clips.forEach(function(clip){
                const action = mixer.clipAction(clip);
                action.play()
                mixers.push(mixer);
            })
        }
    }
    console.log(scene.children.length);
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

const clock = new THREE.Clock();
function animate(time) {
    highlightMesh.material.opacity = 1 + Math.sin(time / 120);
    // if(mixer)
    //     mixer.update(clock.getDelta())
    const delta = clock.getDelta()
    mixers.forEach(function(mixer){
        mixer.update(delta);
    })
    // objects.forEach(function(object) {
    //     // object.rotation.x = time / 1000;
    //     // object.rotation.z = time / 1000;
    //     // object.position.y = 0.5 + 0.5 * Math.abs(Math.sin(time / 1000));
    // });

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});