import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {TeapotGeometry} from 'three/examples/jsm/geometries/TeapotGeometry.js'
import { GUI } from 'dat.gui'
// import { scene , renderer} from './demo.js';

var geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
var material = new THREE.MeshNormalMaterial({wireframe:true });
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
export{cube, sphere, cone, cylinder, teapot, wheel}