// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fpz5J":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1788c624b8708bd5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5rLtz":[function(require,module,exports) {
var _three = require("three");
var _orbitControlsJs = require("three/examples/jsm/controls/OrbitControls.js");
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _datGui = require("dat.gui");
var _skeletonUtils = require("three/examples/jsm/utils/SkeletonUtils");
const renderer = new _three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new (0, _orbitControlsJs.OrbitControls)(camera, renderer.domElement);
camera.position.set(10, 15, -22);
orbit.update();
const planeMesh = new _three.Mesh(new _three.PlaneGeometry(20, 20), new _three.MeshBasicMaterial({
    side: _three.DoubleSide,
    visible: true
}));
planeMesh.rotateX(-Math.PI / 2);
scene.add(planeMesh);
const grid = new _three.GridHelper(20, 20);
scene.add(grid);
const highlightMesh = new _three.Mesh(new _three.PlaneGeometry(1, 1), new _three.MeshBasicMaterial({
    side: _three.DoubleSide,
    transparent: false
}));
highlightMesh.rotateX(-Math.PI / 2);
highlightMesh.position.set(0.5, 0, 0.5);
scene.add(highlightMesh);
const mousePosition = new _three.Vector2();
const raycaster = new _three.Raycaster();
let intersects;
window.addEventListener("mousemove", function(e) {
    mousePosition.x = e.clientX / window.innerWidth * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mousePosition, camera);
    intersects = raycaster.intersectObject(planeMesh);
    if (intersects.length > 0) {
        const intersect = intersects[0];
        const highlightPos = new _three.Vector3().copy(intersect.point).floor().addScalar(0.5);
        highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);
        const objectExist = objects.find(function(object) {
            return object.position.x === highlightMesh.position.x && object.position.z === highlightMesh.position.z;
        });
        if (!objectExist) highlightMesh.material.color.setHex(0xFFFFFF);
        else highlightMesh.material.color.setHex(0xFF0000);
    }
});
let stag, mixer;
let clips;
const loader = new (0, _gltfloader.GLTFLoader)();
loader.load("./assets/dragon/scene.gltf", function(gltf) {
    const model = gltf.scene;
    gltf.scene.getObjectByName("Plane").visible = false;
    model.scale.set(0.8, 0.8, 0.8);
    model.position.set(0, 2, 0);
    // scene.add(model);
    clips = gltf.animations;
    // const mixer = new THREE.AnimationMixer(model);
    // clips.forEach(function(clip){
    //     const action = mixer.clipAction(clip);
    //     action.play()
    // })
    stag = model;
    console.log(model.getObjectByName);
});
const objects = [];
const mixers = [];
window.addEventListener("mousedown", function() {
    const objectExist = objects.find(function(object) {
        return object.position.x === highlightMesh.position.x && object.position.z === highlightMesh.position.z;
    });
    if (!objectExist) {
        if (intersects.length > 0) {
            const stagClone = _skeletonUtils.clone(stag);
            stagClone.position.copy(highlightMesh.position);
            scene.add(stagClone);
            objects.push(stagClone);
            highlightMesh.material.color.setHex(0xFF0000);
            const mixer = new _three.AnimationMixer(stagClone);
            clips.forEach(function(clip) {
                const action = mixer.clipAction(clip);
                action.play();
                mixers.push(mixer);
            });
        }
    }
    console.log(scene.children.length);
});
// //----------------------------LIGHT SETUP----------------------------//
const al = new _three.AmbientLight(0xffffff, 0.5);
scene.add(al);
const light = new _three.DirectionalLight();
scene.add(light);
const helper = new _three.DirectionalLightHelper(light);
scene.add(helper);
const data = {
    color: light.color.getHex(),
    mapsEnabled: true
};
const gui = new (0, _datGui.GUI)();
const lightFolder = gui.addFolder("THREE.Light");
lightFolder.addColor(data, "color").onChange(()=>{
    light.color.setHex(Number(data.color.toString().replace("#", "0x")));
});
lightFolder.add(light, "intensity", 0, 1, 0.01);
const directionalLightFolder = gui.addFolder("THREE.DirectionalLight");
directionalLightFolder.add(light.position, "x", -100, 100, 0.01);
directionalLightFolder.add(light.position, "y", -100, 100, 0.01);
directionalLightFolder.add(light.position, "z", -100, 100, 0.01);
directionalLightFolder.open();
const clock = new _three.Clock();
function animate(time) {
    highlightMesh.material.opacity = 1 + Math.sin(time / 120);
    // if(mixer)
    //     mixer.update(clock.getDelta())
    const delta = clock.getDelta();
    mixers.forEach(function(mixer) {
        mixer.update(delta);
    });
    // objects.forEach(function(object) {
    //     // object.rotation.x = time / 1000;
    //     // object.rotation.z = time / 1000;
    //     // object.position.y = 0.5 + 0.5 * Math.abs(Math.sin(time / 1000));
    // });
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
window.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls.js":"7mqRv","three/examples/jsm/loaders/GLTFLoader":"dVRsF","dat.gui":"k3xQk","three/examples/jsm/utils/SkeletonUtils":"5hk7d"}],"5hk7d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retarget", ()=>retarget);
parcelHelpers.export(exports, "retargetClip", ()=>retargetClip);
parcelHelpers.export(exports, "clone", ()=>clone);
var _three = require("three");
function retarget(target, source, options = {}) {
    const pos = new (0, _three.Vector3)(), quat = new (0, _three.Quaternion)(), scale = new (0, _three.Vector3)(), bindBoneMatrix = new (0, _three.Matrix4)(), relativeMatrix = new (0, _three.Matrix4)(), globalMatrix = new (0, _three.Matrix4)();
    options.preserveMatrix = options.preserveMatrix !== undefined ? options.preserveMatrix : true;
    options.preservePosition = options.preservePosition !== undefined ? options.preservePosition : true;
    options.preserveHipPosition = options.preserveHipPosition !== undefined ? options.preserveHipPosition : false;
    options.useTargetMatrix = options.useTargetMatrix !== undefined ? options.useTargetMatrix : false;
    options.hip = options.hip !== undefined ? options.hip : "hip";
    options.names = options.names || {};
    const sourceBones = source.isObject3D ? source.skeleton.bones : getBones(source), bones = target.isObject3D ? target.skeleton.bones : getBones(target);
    let bindBones, bone, name, boneTo, bonesPosition;
    // reset bones
    if (target.isObject3D) target.skeleton.pose();
    else {
        options.useTargetMatrix = true;
        options.preserveMatrix = false;
    }
    if (options.preservePosition) {
        bonesPosition = [];
        for(let i = 0; i < bones.length; i++)bonesPosition.push(bones[i].position.clone());
    }
    if (options.preserveMatrix) {
        // reset matrix
        target.updateMatrixWorld();
        target.matrixWorld.identity();
        // reset children matrix
        for(let i = 0; i < target.children.length; ++i)target.children[i].updateMatrixWorld(true);
    }
    if (options.offsets) {
        bindBones = [];
        for(let i = 0; i < bones.length; ++i){
            bone = bones[i];
            name = options.names[bone.name] || bone.name;
            if (options.offsets[name]) {
                bone.matrix.multiply(options.offsets[name]);
                bone.matrix.decompose(bone.position, bone.quaternion, bone.scale);
                bone.updateMatrixWorld();
            }
            bindBones.push(bone.matrixWorld.clone());
        }
    }
    for(let i = 0; i < bones.length; ++i){
        bone = bones[i];
        name = options.names[bone.name] || bone.name;
        boneTo = getBoneByName(name, sourceBones);
        globalMatrix.copy(bone.matrixWorld);
        if (boneTo) {
            boneTo.updateMatrixWorld();
            if (options.useTargetMatrix) relativeMatrix.copy(boneTo.matrixWorld);
            else {
                relativeMatrix.copy(target.matrixWorld).invert();
                relativeMatrix.multiply(boneTo.matrixWorld);
            }
            // ignore scale to extract rotation
            scale.setFromMatrixScale(relativeMatrix);
            relativeMatrix.scale(scale.set(1 / scale.x, 1 / scale.y, 1 / scale.z));
            // apply to global matrix
            globalMatrix.makeRotationFromQuaternion(quat.setFromRotationMatrix(relativeMatrix));
            if (target.isObject3D) {
                const boneIndex = bones.indexOf(bone), wBindMatrix = bindBones ? bindBones[boneIndex] : bindBoneMatrix.copy(target.skeleton.boneInverses[boneIndex]).invert();
                globalMatrix.multiply(wBindMatrix);
            }
            globalMatrix.copyPosition(relativeMatrix);
        }
        if (bone.parent && bone.parent.isBone) {
            bone.matrix.copy(bone.parent.matrixWorld).invert();
            bone.matrix.multiply(globalMatrix);
        } else bone.matrix.copy(globalMatrix);
        if (options.preserveHipPosition && name === options.hip) bone.matrix.setPosition(pos.set(0, bone.position.y, 0));
        bone.matrix.decompose(bone.position, bone.quaternion, bone.scale);
        bone.updateMatrixWorld();
    }
    if (options.preservePosition) for(let i = 0; i < bones.length; ++i){
        bone = bones[i];
        name = options.names[bone.name] || bone.name;
        if (name !== options.hip) bone.position.copy(bonesPosition[i]);
    }
    if (options.preserveMatrix) // restore matrix
    target.updateMatrixWorld(true);
}
function retargetClip(target, source, clip, options = {}) {
    options.useFirstFramePosition = options.useFirstFramePosition !== undefined ? options.useFirstFramePosition : false;
    options.fps = options.fps !== undefined ? options.fps : 30;
    options.names = options.names || [];
    if (!source.isObject3D) source = getHelperFromSkeleton(source);
    const numFrames = Math.round(clip.duration * (options.fps / 1000) * 1000), delta = 1 / options.fps, convertedTracks = [], mixer = new (0, _three.AnimationMixer)(source), bones = getBones(target.skeleton), boneDatas = [];
    let positionOffset, bone, boneTo, boneData, name;
    mixer.clipAction(clip).play();
    mixer.update(0);
    source.updateMatrixWorld();
    for(let i = 0; i < numFrames; ++i){
        const time = i * delta;
        retarget(target, source, options);
        for(let j = 0; j < bones.length; ++j){
            name = options.names[bones[j].name] || bones[j].name;
            boneTo = getBoneByName(name, source.skeleton);
            if (boneTo) {
                bone = bones[j];
                boneData = boneDatas[j] = boneDatas[j] || {
                    bone: bone
                };
                if (options.hip === name) {
                    if (!boneData.pos) boneData.pos = {
                        times: new Float32Array(numFrames),
                        values: new Float32Array(numFrames * 3)
                    };
                    if (options.useFirstFramePosition) {
                        if (i === 0) positionOffset = bone.position.clone();
                        bone.position.sub(positionOffset);
                    }
                    boneData.pos.times[i] = time;
                    bone.position.toArray(boneData.pos.values, i * 3);
                }
                if (!boneData.quat) boneData.quat = {
                    times: new Float32Array(numFrames),
                    values: new Float32Array(numFrames * 4)
                };
                boneData.quat.times[i] = time;
                bone.quaternion.toArray(boneData.quat.values, i * 4);
            }
        }
        mixer.update(delta);
        source.updateMatrixWorld();
    }
    for(let i = 0; i < boneDatas.length; ++i){
        boneData = boneDatas[i];
        if (boneData) {
            if (boneData.pos) convertedTracks.push(new (0, _three.VectorKeyframeTrack)(".bones[" + boneData.bone.name + "].position", boneData.pos.times, boneData.pos.values));
            convertedTracks.push(new (0, _three.QuaternionKeyframeTrack)(".bones[" + boneData.bone.name + "].quaternion", boneData.quat.times, boneData.quat.values));
        }
    }
    mixer.uncacheAction(clip);
    return new (0, _three.AnimationClip)(clip.name, -1, convertedTracks);
}
function clone(source) {
    const sourceLookup = new Map();
    const cloneLookup = new Map();
    const clone = source.clone();
    parallelTraverse(source, clone, function(sourceNode, clonedNode) {
        sourceLookup.set(clonedNode, sourceNode);
        cloneLookup.set(sourceNode, clonedNode);
    });
    clone.traverse(function(node) {
        if (!node.isSkinnedMesh) return;
        const clonedMesh = node;
        const sourceMesh = sourceLookup.get(node);
        const sourceBones = sourceMesh.skeleton.bones;
        clonedMesh.skeleton = sourceMesh.skeleton.clone();
        clonedMesh.bindMatrix.copy(sourceMesh.bindMatrix);
        clonedMesh.skeleton.bones = sourceBones.map(function(bone) {
            return cloneLookup.get(bone);
        });
        clonedMesh.bind(clonedMesh.skeleton, clonedMesh.bindMatrix);
    });
    return clone;
}
// internal helper
function getBoneByName(name, skeleton) {
    for(let i = 0, bones = getBones(skeleton); i < bones.length; i++){
        if (name === bones[i].name) return bones[i];
    }
}
function getBones(skeleton) {
    return Array.isArray(skeleton) ? skeleton : skeleton.bones;
}
function getHelperFromSkeleton(skeleton) {
    const source = new (0, _three.SkeletonHelper)(skeleton.bones[0]);
    source.skeleton = skeleton;
    return source;
}
function parallelTraverse(a, b, callback) {
    callback(a, b);
    for(let i = 0; i < a.children.length; i++)parallelTraverse(a.children[i], b.children[i], callback);
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fpz5J","5rLtz"], "5rLtz", "parcelRequire94c2")

//# sourceMappingURL=main.b8708bd5.js.map
