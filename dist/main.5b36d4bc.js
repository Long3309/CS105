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
})({"hUjV9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "455e7f2b5b36d4bc";
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

},{}],"4g6pT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scene", ()=>scene);
var _three = require("three");
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _datGui = require("dat.gui");
// scene.add( cube );
// camera.position.z = 5;
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _objloader = require("three/examples/jsm/loaders/OBJLoader");
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new _three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new (0, _orbitControls.OrbitControls)(camera, renderer.domElement);
//---//--//--//
const geometry = new _three.BoxGeometry(1, 1, 1);
const material = new _three.MeshBasicMaterial({
    color: 0x00ff00
});
const cube = new _three.Mesh(geometry, material);
const loader = new (0, _gltfloader.GLTFLoader)();
loader.load("./assets/dragon/scene.gltf", function(gltf) {
    const shiba = gltf.scene;
    shiba.receiveShadow = true;
    scene.add(shiba);
    console.log(shiba.getObjectByName);
// shiba.getObjectByName("Group18985_default_0").material.color.setHex(0x00FF00);
// shiba.getObjectByName("Box002_default_0").material.color.setHex(0xFFFFFF);
});
const objectloader = new (0, _objloader.OBJLoader)();
objectloader.load("./assets/Mech_RaeTheRedPanda.obj", function(object) {
// scene.add( object );
// shiba.getObjectByName("Group18985_default_0").material.color.setHex(0x00FF00);
// shiba.getObjectByName("Box002_default_0").material.color.setHex(0xFFFFFF);
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
//---render---//
camera.position.set(0, -20, 20);
controls.update();
function animate(time) {
    requestAnimationFrame(animate);
    // shiba.rotation.y = -time/3000;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","dat.gui":"k3xQk","three/examples/jsm/loaders/GLTFLoader":"dVRsF","three/examples/jsm/loaders/OBJLoader":"htIhD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVRsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFLoader", ()=>GLTFLoader);
var _three = require("three");
var _bufferGeometryUtilsJs = require("../utils/BufferGeometryUtils.js");
class GLTFLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.dracoLoader = null;
        this.ktx2Loader = null;
        this.meshoptDecoder = null;
        this.pluginCallbacks = [];
        this.register(function(parser) {
            return new GLTFMaterialsClearcoatExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureBasisUExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureWebPExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureAVIFExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSheenExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsTransmissionExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsVolumeExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIorExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsEmissiveStrengthExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSpecularExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIridescenceExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsAnisotropyExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFLightsExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshoptCompression(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshGpuInstancing(parser);
        });
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        let resourcePath;
        if (this.resourcePath !== "") resourcePath = this.resourcePath;
        else if (this.path !== "") resourcePath = this.path;
        else resourcePath = (0, _three.LoaderUtils).extractUrlBase(url);
        // Tells the LoadingManager to track an extra item, which resolves after
        // the model is fully loaded. This means the count of items loaded will
        // be incorrect, but ensures manager.onLoad() does not fire early.
        this.manager.itemStart(url);
        const _onError = function(e) {
            if (onError) onError(e);
            else console.error(e);
            scope.manager.itemError(url);
            scope.manager.itemEnd(url);
        };
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setResponseType("arraybuffer");
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(data) {
            try {
                scope.parse(data, resourcePath, function(gltf) {
                    onLoad(gltf);
                    scope.manager.itemEnd(url);
                }, _onError);
            } catch (e) {
                _onError(e);
            }
        }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader) {
        this.dracoLoader = dracoLoader;
        return this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(ktx2Loader) {
        this.ktx2Loader = ktx2Loader;
        return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
        this.meshoptDecoder = meshoptDecoder;
        return this;
    }
    register(callback) {
        if (this.pluginCallbacks.indexOf(callback) === -1) this.pluginCallbacks.push(callback);
        return this;
    }
    unregister(callback) {
        if (this.pluginCallbacks.indexOf(callback) !== -1) this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
        return this;
    }
    parse(data, path, onLoad, onError) {
        let json;
        const extensions = {};
        const plugins = {};
        const textDecoder = new TextDecoder();
        if (typeof data === "string") json = JSON.parse(data);
        else if (data instanceof ArrayBuffer) {
            const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
            if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
                try {
                    extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
                } catch (error) {
                    if (onError) onError(error);
                    return;
                }
                json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
            } else json = JSON.parse(textDecoder.decode(data));
        } else json = data;
        if (json.asset === undefined || json.asset.version[0] < 2) {
            if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
        }
        const parser = new GLTFParser(json, {
            path: path || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        parser.fileLoader.setRequestHeader(this.requestHeader);
        for(let i = 0; i < this.pluginCallbacks.length; i++){
            const plugin = this.pluginCallbacks[i](parser);
            plugins[plugin.name] = plugin;
            // Workaround to avoid determining as unknown extension
            // in addUnknownExtensionsToUserData().
            // Remove this workaround if we move all the existing
            // extension handlers to plugin system
            extensions[plugin.name] = true;
        }
        if (json.extensionsUsed) for(let i = 0; i < json.extensionsUsed.length; ++i){
            const extensionName = json.extensionsUsed[i];
            const extensionsRequired = json.extensionsRequired || [];
            switch(extensionName){
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                    extensions[extensionName] = new GLTFMaterialsUnlitExtension();
                    break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                    extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
                    break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                    extensions[extensionName] = new GLTFTextureTransformExtension();
                    break;
                case EXTENSIONS.KHR_MESH_QUANTIZATION:
                    extensions[extensionName] = new GLTFMeshQuantizationExtension();
                    break;
                default:
                    if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === undefined) console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
        parser.setExtensions(extensions);
        parser.setPlugins(plugins);
        parser.parse(onLoad, onError);
    }
    parseAsync(data, path) {
        const scope = this;
        return new Promise(function(resolve, reject) {
            scope.parse(data, path, resolve, reject);
        });
    }
}
/* GLTFREGISTRY */ function GLTFRegistry() {
    let objects = {};
    return {
        get: function(key) {
            return objects[key];
        },
        add: function(key, object) {
            objects[key] = object;
        },
        remove: function(key) {
            delete objects[key];
        },
        removeAll: function() {
            objects = {};
        }
    };
}
/*********************************/ /********** EXTENSIONS ***********/ /*********************************/ const EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */ class GLTFLightsExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
        // Object3D instance caches
        this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        const parser = this.parser;
        const nodeDefs = this.parser.json.nodes || [];
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== undefined) parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
    }
    _loadLight(lightIndex) {
        const parser = this.parser;
        const cacheKey = "light:" + lightIndex;
        let dependency = parser.cache.get(cacheKey);
        if (dependency) return dependency;
        const json = parser.json;
        const extensions = json.extensions && json.extensions[this.name] || {};
        const lightDefs = extensions.lights || [];
        const lightDef = lightDefs[lightIndex];
        let lightNode;
        const color = new (0, _three.Color)(0xffffff);
        if (lightDef.color !== undefined) color.fromArray(lightDef.color);
        const range = lightDef.range !== undefined ? lightDef.range : 0;
        switch(lightDef.type){
            case "directional":
                lightNode = new (0, _three.DirectionalLight)(color);
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            case "point":
                lightNode = new (0, _three.PointLight)(color);
                lightNode.distance = range;
                break;
            case "spot":
                lightNode = new (0, _three.SpotLight)(color);
                lightNode.distance = range;
                // Handle spotlight properties.
                lightDef.spot = lightDef.spot || {};
                lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
                lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
                lightNode.angle = lightDef.spot.outerConeAngle;
                lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
        }
        // Some lights (e.g. spot) default to a position other than the origin. Reset the position
        // here, because node-level parsing will only override position if explicitly specified.
        lightNode.position.set(0, 0, 0);
        lightNode.decay = 2;
        assignExtrasToUserData(lightNode, lightDef);
        if (lightDef.intensity !== undefined) lightNode.intensity = lightDef.intensity;
        lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
        dependency = Promise.resolve(lightNode);
        parser.cache.add(cacheKey, dependency);
        return dependency;
    }
    getDependency(type, index) {
        if (type !== "light") return;
        return this._loadLight(index);
    }
    createNodeAttachment(nodeIndex) {
        const self1 = this;
        const parser = this.parser;
        const json = parser.json;
        const nodeDef = json.nodes[nodeIndex];
        const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
        const lightIndex = lightDef.light;
        if (lightIndex === undefined) return null;
        return this._loadLight(lightIndex).then(function(light) {
            return parser._getNodeRef(self1.cache, lightIndex, light);
        });
    }
}
/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */ class GLTFMaterialsUnlitExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return 0, _three.MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pending = [];
        materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
        materialParams.opacity = 1.0;
        const metallicRoughness = materialDef.pbrMetallicRoughness;
        if (metallicRoughness) {
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.SRGBColorSpace)));
        }
        return Promise.all(pending);
    }
}
/**
 * Materials Emissive Strength Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
 */ class GLTFMaterialsEmissiveStrengthExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
        if (emissiveStrength !== undefined) materialParams.emissiveIntensity = emissiveStrength;
        return Promise.resolve();
    }
}
/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */ class GLTFMaterialsClearcoatExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.clearcoatFactor !== undefined) materialParams.clearcoat = extension.clearcoatFactor;
        if (extension.clearcoatTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
        if (extension.clearcoatRoughnessFactor !== undefined) materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
        if (extension.clearcoatRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
        if (extension.clearcoatNormalTexture !== undefined) {
            pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
            if (extension.clearcoatNormalTexture.scale !== undefined) {
                const scale = extension.clearcoatNormalTexture.scale;
                materialParams.clearcoatNormalScale = new (0, _three.Vector2)(scale, scale);
            }
        }
        return Promise.all(pending);
    }
}
/**
 * Iridescence Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
 */ class GLTFMaterialsIridescenceExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.iridescenceFactor !== undefined) materialParams.iridescence = extension.iridescenceFactor;
        if (extension.iridescenceTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
        if (extension.iridescenceIor !== undefined) materialParams.iridescenceIOR = extension.iridescenceIor;
        if (materialParams.iridescenceThicknessRange === undefined) materialParams.iridescenceThicknessRange = [
            100,
            400
        ];
        if (extension.iridescenceThicknessMinimum !== undefined) materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
        if (extension.iridescenceThicknessMaximum !== undefined) materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
        if (extension.iridescenceThicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
        return Promise.all(pending);
    }
}
/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */ class GLTFMaterialsSheenExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        materialParams.sheenColor = new (0, _three.Color)(0, 0, 0);
        materialParams.sheenRoughness = 0;
        materialParams.sheen = 1;
        const extension = materialDef.extensions[this.name];
        if (extension.sheenColorFactor !== undefined) materialParams.sheenColor.fromArray(extension.sheenColorFactor);
        if (extension.sheenRoughnessFactor !== undefined) materialParams.sheenRoughness = extension.sheenRoughnessFactor;
        if (extension.sheenColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, (0, _three.SRGBColorSpace)));
        if (extension.sheenRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
        return Promise.all(pending);
    }
}
/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */ class GLTFMaterialsTransmissionExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.transmissionFactor !== undefined) materialParams.transmission = extension.transmissionFactor;
        if (extension.transmissionTexture !== undefined) pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
        return Promise.all(pending);
    }
}
/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */ class GLTFMaterialsVolumeExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;
        if (extension.thicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
        materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
        const colorArray = extension.attenuationColor || [
            1,
            1,
            1
        ];
        materialParams.attenuationColor = new (0, _three.Color)(colorArray[0], colorArray[1], colorArray[2]);
        return Promise.all(pending);
    }
}
/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */ class GLTFMaterialsIorExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const extension = materialDef.extensions[this.name];
        materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;
        return Promise.resolve();
    }
}
/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */ class GLTFMaterialsSpecularExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;
        if (extension.specularTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
        const colorArray = extension.specularColorFactor || [
            1,
            1,
            1
        ];
        materialParams.specularColor = new (0, _three.Color)(colorArray[0], colorArray[1], colorArray[2]);
        if (extension.specularColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, (0, _three.SRGBColorSpace)));
        return Promise.all(pending);
    }
}
/**
 * Materials anisotropy Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_anisotropy
 */ class GLTFMaterialsAnisotropyExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.anisotropyStrength !== undefined) materialParams.anisotropy = extension.anisotropyStrength;
        if (extension.anisotropyRotation !== undefined) materialParams.anisotropyRotation = extension.anisotropyRotation;
        if (extension.anisotropyTexture !== undefined) pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
        return Promise.all(pending);
    }
}
/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */ class GLTFTextureBasisUExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[this.name]) return null;
        const extension = textureDef.extensions[this.name];
        const loader = parser.options.ktx2Loader;
        if (!loader) {
            if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            else // Assumes that the extension is optional and that a fallback texture is present
            return null;
        }
        return parser.loadTextureImage(textureIndex, extension.source, loader);
    }
}
/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */ class GLTFTextureWebPExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser.textureLoader;
        if (source.uri) {
            const handler = parser.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            // Fall back to PNG or JPEG.
            return parser.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image. Support for lossy images doesn't guarantee support for all
            // WebP images, unfortunately.
            image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * AVIF Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
 */ class GLTFTextureAVIFExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser.textureLoader;
        if (source.uri) {
            const handler = parser.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            // Fall back to PNG or JPEG.
            return parser.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image.
            image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */ class GLTFMeshoptCompression {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
        this.parser = parser;
    }
    loadBufferView(index) {
        const json = this.parser.json;
        const bufferView = json.bufferViews[index];
        if (bufferView.extensions && bufferView.extensions[this.name]) {
            const extensionDef = bufferView.extensions[this.name];
            const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
            const decoder = this.parser.options.meshoptDecoder;
            if (!decoder || !decoder.supported) {
                if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                else // Assumes that the extension is optional and that fallback buffer data is present
                return null;
            }
            return buffer.then(function(res) {
                const byteOffset = extensionDef.byteOffset || 0;
                const byteLength = extensionDef.byteLength || 0;
                const count = extensionDef.count;
                const stride = extensionDef.byteStride;
                const source = new Uint8Array(res, byteOffset, byteLength);
                if (decoder.decodeGltfBufferAsync) return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res) {
                    return res.buffer;
                });
                else // Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
                return decoder.ready.then(function() {
                    const result = new ArrayBuffer(count * stride);
                    decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
                    return result;
                });
            });
        } else return null;
    }
}
/**
 * GPU Instancing Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
 *
 */ class GLTFMeshGpuInstancing {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
        this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
        const json = this.parser.json;
        const nodeDef = json.nodes[nodeIndex];
        if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === undefined) return null;
        const meshDef = json.meshes[nodeDef.mesh];
        // No Points or Lines + Instancing support yet
        for (const primitive of meshDef.primitives){
            if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== undefined) return null;
        }
        const extensionDef = nodeDef.extensions[this.name];
        const attributesDef = extensionDef.attributes;
        // @TODO: Can we support InstancedMesh + SkinnedMesh?
        const pending = [];
        const attributes = {};
        for(const key in attributesDef)pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor)=>{
            attributes[key] = accessor;
            return attributes[key];
        }));
        if (pending.length < 1) return null;
        pending.push(this.parser.createNodeMesh(nodeIndex));
        return Promise.all(pending).then((results)=>{
            const nodeObject = results.pop();
            const meshes = nodeObject.isGroup ? nodeObject.children : [
                nodeObject
            ];
            const count = results[0].count; // All attribute counts should be same
            const instancedMeshes = [];
            for (const mesh of meshes){
                // Temporal variables
                const m = new (0, _three.Matrix4)();
                const p = new (0, _three.Vector3)();
                const q = new (0, _three.Quaternion)();
                const s = new (0, _three.Vector3)(1, 1, 1);
                const instancedMesh = new (0, _three.InstancedMesh)(mesh.geometry, mesh.material, count);
                for(let i = 0; i < count; i++){
                    if (attributes.TRANSLATION) p.fromBufferAttribute(attributes.TRANSLATION, i);
                    if (attributes.ROTATION) q.fromBufferAttribute(attributes.ROTATION, i);
                    if (attributes.SCALE) s.fromBufferAttribute(attributes.SCALE, i);
                    instancedMesh.setMatrixAt(i, m.compose(p, q, s));
                }
                // Add instance attributes to the geometry, excluding TRS.
                for(const attributeName in attributes)if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
                // Just in case
                (0, _three.Object3D).prototype.copy.call(instancedMesh, mesh);
                this.parser.assignFinalMaterial(instancedMesh);
                instancedMeshes.push(instancedMesh);
            }
            if (nodeObject.isGroup) {
                nodeObject.clear();
                nodeObject.add(...instancedMeshes);
                return nodeObject;
            }
            return instancedMeshes[0];
        });
    }
}
/* BINARY EXTENSION */ const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = {
    JSON: 0x4E4F534A,
    BIN: 0x004E4942
};
class GLTFBinaryExtension {
    constructor(data){
        this.name = EXTENSIONS.KHR_BINARY_GLTF;
        this.content = null;
        this.body = null;
        const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
        const textDecoder = new TextDecoder();
        this.header = {
            magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
            version: headerView.getUint32(4, true),
            length: headerView.getUint32(8, true)
        };
        if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        else if (this.header.version < 2.0) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
        const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
        let chunkIndex = 0;
        while(chunkIndex < chunkContentsLength){
            const chunkLength = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            const chunkType = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
                const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
                this.content = textDecoder.decode(contentArray);
            } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
                const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
                this.body = data.slice(byteOffset, byteOffset + chunkLength);
            }
            // Clients must ignore chunks with unknown types.
            chunkIndex += chunkLength;
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}
/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */ class GLTFDracoMeshCompressionExtension {
    constructor(json, dracoLoader){
        if (!dracoLoader) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
        this.json = json;
        this.dracoLoader = dracoLoader;
        this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
        const json = this.json;
        const dracoLoader = this.dracoLoader;
        const bufferViewIndex = primitive.extensions[this.name].bufferView;
        const gltfAttributeMap = primitive.extensions[this.name].attributes;
        const threeAttributeMap = {};
        const attributeNormalizedMap = {};
        const attributeTypeMap = {};
        for(const attributeName in gltfAttributeMap){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
        }
        for(const attributeName in primitive.attributes){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            if (gltfAttributeMap[attributeName] !== undefined) {
                const accessorDef = json.accessors[primitive.attributes[attributeName]];
                const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
                attributeTypeMap[threeAttributeName] = componentType.name;
                attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
            }
        }
        return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
            return new Promise(function(resolve) {
                dracoLoader.decodeDracoFile(bufferView, function(geometry) {
                    for(const attributeName in geometry.attributes){
                        const attribute = geometry.attributes[attributeName];
                        const normalized = attributeNormalizedMap[attributeName];
                        if (normalized !== undefined) attribute.normalized = normalized;
                    }
                    resolve(geometry);
                }, threeAttributeMap, attributeTypeMap);
            });
        });
    }
}
/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */ class GLTFTextureTransformExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
        if ((transform.texCoord === undefined || transform.texCoord === texture.channel) && transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined) // See https://github.com/mrdoob/three.js/issues/21819.
        return texture;
        texture = texture.clone();
        if (transform.texCoord !== undefined) texture.channel = transform.texCoord;
        if (transform.offset !== undefined) texture.offset.fromArray(transform.offset);
        if (transform.rotation !== undefined) texture.rotation = transform.rotation;
        if (transform.scale !== undefined) texture.repeat.fromArray(transform.scale);
        texture.needsUpdate = true;
        return texture;
    }
}
/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */ class GLTFMeshQuantizationExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
}
/*********************************/ /********** INTERPOLATION ********/ /*********************************/ // Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends (0, _three.Interpolant) {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer){
        super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
        // Copies a sample value to the result buffer. See description of glTF
        // CUBICSPLINE values layout in interpolate_() function below.
        const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
        for(let i = 0; i !== valueSize; i++)result[i] = values[offset + i];
        return result;
    }
    interpolate_(i1, t0, t, t1) {
        const result = this.resultBuffer;
        const values = this.sampleValues;
        const stride = this.valueSize;
        const stride2 = stride * 2;
        const stride3 = stride * 3;
        const td = t1 - t0;
        const p = (t - t0) / td;
        const pp = p * p;
        const ppp = pp * p;
        const offset1 = i1 * stride3;
        const offset0 = offset1 - stride3;
        const s2 = -2 * ppp + 3 * pp;
        const s3 = ppp - pp;
        const s0 = 1 - s2;
        const s1 = s3 - pp + p;
        // Layout of keyframe output values for CUBICSPLINE animations:
        //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
        for(let i = 0; i !== stride; i++){
            const p0 = values[offset0 + i + stride]; // splineVertex_k
            const m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)
            const p1 = values[offset1 + i + stride]; // splineVertex_k+1
            const m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)
            result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
        }
        return result;
    }
}
const _q = new (0, _three.Quaternion)();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t, t1) {
        const result = super.interpolate_(i1, t0, t, t1);
        _q.fromArray(result).normalize().toArray(result);
        return result;
    }
}
/*********************************/ /********** INTERNALS ************/ /*********************************/ /* CONSTANTS */ const WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
};
const WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
};
const WEBGL_FILTERS = {
    9728: (0, _three.NearestFilter),
    9729: (0, _three.LinearFilter),
    9984: (0, _three.NearestMipmapNearestFilter),
    9985: (0, _three.LinearMipmapNearestFilter),
    9986: (0, _three.NearestMipmapLinearFilter),
    9987: (0, _three.LinearMipmapLinearFilter)
};
const WEBGL_WRAPPINGS = {
    33071: (0, _three.ClampToEdgeWrapping),
    33648: (0, _three.MirroredRepeatWrapping),
    10497: (0, _three.RepeatWrapping)
};
const WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
};
const ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
};
const PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
};
const INTERPOLATION = {
    CUBICSPLINE: undefined,
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: (0, _three.InterpolateLinear),
    STEP: (0, _three.InterpolateDiscrete)
};
const ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */ function createDefaultMaterial(cache) {
    if (cache["DefaultMaterial"] === undefined) cache["DefaultMaterial"] = new (0, _three.MeshStandardMaterial)({
        color: 0xFFFFFF,
        emissive: 0x000000,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: (0, _three.FrontSide)
    });
    return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    // Add unknown glTF extensions to an object's userData.
    for(const name in objectDef.extensions)if (knownExtensions[name] === undefined) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
}
/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */ function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== undefined) {
        if (typeof gltfDef.extras === "object") Object.assign(object.userData, gltfDef.extras);
        else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
    }
}
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (target.POSITION !== undefined) hasMorphPosition = true;
        if (target.NORMAL !== undefined) hasMorphNormal = true;
        if (target.COLOR_0 !== undefined) hasMorphColor = true;
        if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (hasMorphPosition) {
            const pendingAccessor = target.POSITION !== undefined ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
            pendingPositionAccessors.push(pendingAccessor);
        }
        if (hasMorphNormal) {
            const pendingAccessor = target.NORMAL !== undefined ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
            pendingNormalAccessors.push(pendingAccessor);
        }
        if (hasMorphColor) {
            const pendingAccessor = target.COLOR_0 !== undefined ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
            pendingColorAccessors.push(pendingAccessor);
        }
    }
    return Promise.all([
        Promise.all(pendingPositionAccessors),
        Promise.all(pendingNormalAccessors),
        Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
        const morphPositions = accessors[0];
        const morphNormals = accessors[1];
        const morphColors = accessors[2];
        if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
        if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
        if (hasMorphColor) geometry.morphAttributes.color = morphColors;
        geometry.morphTargetsRelative = true;
        return geometry;
    });
}
/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */ function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== undefined) for(let i = 0, il = meshDef.weights.length; i < il; i++)mesh.morphTargetInfluences[i] = meshDef.weights[i];
    // .extras has user-defined data, so check that .extras.targetNames is an array.
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
        const targetNames = meshDef.extras.targetNames;
        if (mesh.morphTargetInfluences.length === targetNames.length) {
            mesh.morphTargetDictionary = {};
            for(let i = 0, il = targetNames.length; i < il; i++)mesh.morphTargetDictionary[targetNames[i]] = i;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function createPrimitiveKey(primitiveDef) {
    let geometryKey;
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    if (dracoExtension) geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    else geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    if (primitiveDef.targets !== undefined) for(let i = 0, il = primitiveDef.targets.length; i < il; i++)geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
    return geometryKey;
}
function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for(let i = 0, il = keys.length; i < il; i++)attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
    return attributesKey;
}
function getNormalizedComponentScale(constructor) {
    // Reference:
    // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data
    switch(constructor){
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}
function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    return "image/png";
}
const _identityMatrix = new (0, _three.Matrix4)();
/* GLTF PARSER */ class GLTFParser {
    constructor(json = {}, options = {}){
        this.json = json;
        this.extensions = {};
        this.plugins = {};
        this.options = options;
        // loader object cache
        this.cache = new GLTFRegistry();
        // associations between Three.js objects and glTF elements
        this.associations = new Map();
        // BufferGeometry caching
        this.primitiveCache = {};
        // Node cache
        this.nodeCache = {};
        // Object3D instance caches
        this.meshCache = {
            refs: {},
            uses: {}
        };
        this.cameraCache = {
            refs: {},
            uses: {}
        };
        this.lightCache = {
            refs: {},
            uses: {}
        };
        this.sourceCache = {};
        this.textureCache = {};
        // Track node names, to ensure no duplicates
        this.nodeNamesUsed = {};
        // Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
        // expensive work of uploading a texture to the GPU off the main thread.
        let isSafari = false;
        let isFirefox = false;
        let firefoxVersion = -1;
        if (typeof navigator !== "undefined") {
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
            isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
            firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
        }
        if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) this.textureLoader = new (0, _three.TextureLoader)(this.options.manager);
        else this.textureLoader = new (0, _three.ImageBitmapLoader)(this.options.manager);
        this.textureLoader.setCrossOrigin(this.options.crossOrigin);
        this.textureLoader.setRequestHeader(this.options.requestHeader);
        this.fileLoader = new (0, _three.FileLoader)(this.options.manager);
        this.fileLoader.setResponseType("arraybuffer");
        if (this.options.crossOrigin === "use-credentials") this.fileLoader.setWithCredentials(true);
    }
    setExtensions(extensions) {
        this.extensions = extensions;
    }
    setPlugins(plugins) {
        this.plugins = plugins;
    }
    parse(onLoad, onError) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        // Clear the loader cache
        this.cache.removeAll();
        this.nodeCache = {};
        // Mark the special nodes/meshes in json for efficient parse
        this._invokeAll(function(ext) {
            return ext._markDefs && ext._markDefs();
        });
        Promise.all(this._invokeAll(function(ext) {
            return ext.beforeRoot && ext.beforeRoot();
        })).then(function() {
            return Promise.all([
                parser.getDependencies("scene"),
                parser.getDependencies("animation"),
                parser.getDependencies("camera")
            ]);
        }).then(function(dependencies) {
            const result = {
                scene: dependencies[0][json.scene || 0],
                scenes: dependencies[0],
                animations: dependencies[1],
                cameras: dependencies[2],
                asset: json.asset,
                parser: parser,
                userData: {}
            };
            addUnknownExtensionsToUserData(extensions, result, json);
            assignExtrasToUserData(result, json);
            Promise.all(parser._invokeAll(function(ext) {
                return ext.afterRoot && ext.afterRoot(result);
            })).then(function() {
                onLoad(result);
            });
        }).catch(onError);
    }
    /**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */ _markDefs() {
        const nodeDefs = this.json.nodes || [];
        const skinDefs = this.json.skins || [];
        const meshDefs = this.json.meshes || [];
        // Nothing in the node definition indicates whether it is a Bone or an
        // Object3D. Use the skins' joint references to mark bones.
        for(let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++){
            const joints = skinDefs[skinIndex].joints;
            for(let i = 0, il = joints.length; i < il; i++)nodeDefs[joints[i]].isBone = true;
        }
        // Iterate over all nodes, marking references to shared resources,
        // as well as skeleton joints.
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.mesh !== undefined) {
                this._addNodeRef(this.meshCache, nodeDef.mesh);
                // Nothing in the mesh definition indicates whether it is
                // a SkinnedMesh or Mesh. Use the node's mesh reference
                // to mark SkinnedMesh if node has skin.
                if (nodeDef.skin !== undefined) meshDefs[nodeDef.mesh].isSkinnedMesh = true;
            }
            if (nodeDef.camera !== undefined) this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
    }
    /**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */ _addNodeRef(cache, index) {
        if (index === undefined) return;
        if (cache.refs[index] === undefined) cache.refs[index] = cache.uses[index] = 0;
        cache.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */ _getNodeRef(cache, index, object) {
        if (cache.refs[index] <= 1) return object;
        const ref = object.clone();
        // Propagates mappings to the cloned object, prevents mappings on the
        // original object from being lost.
        const updateMappings = (original, clone)=>{
            const mappings = this.associations.get(original);
            if (mappings != null) this.associations.set(clone, mappings);
            for (const [i, child] of original.children.entries())updateMappings(child, clone.children[i]);
        };
        updateMappings(object, ref);
        ref.name += "_instance_" + cache.uses[index]++;
        return ref;
    }
    _invokeOne(func) {
        const extensions = Object.values(this.plugins);
        extensions.push(this);
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) return result;
        }
        return null;
    }
    _invokeAll(func) {
        const extensions = Object.values(this.plugins);
        extensions.unshift(this);
        const pending = [];
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) pending.push(result);
        }
        return pending;
    }
    /**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */ getDependency(type, index) {
        const cacheKey = type + ":" + index;
        let dependency = this.cache.get(cacheKey);
        if (!dependency) {
            switch(type){
                case "scene":
                    dependency = this.loadScene(index);
                    break;
                case "node":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadNode && ext.loadNode(index);
                    });
                    break;
                case "mesh":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMesh && ext.loadMesh(index);
                    });
                    break;
                case "accessor":
                    dependency = this.loadAccessor(index);
                    break;
                case "bufferView":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadBufferView && ext.loadBufferView(index);
                    });
                    break;
                case "buffer":
                    dependency = this.loadBuffer(index);
                    break;
                case "material":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMaterial && ext.loadMaterial(index);
                    });
                    break;
                case "texture":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadTexture && ext.loadTexture(index);
                    });
                    break;
                case "skin":
                    dependency = this.loadSkin(index);
                    break;
                case "animation":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadAnimation && ext.loadAnimation(index);
                    });
                    break;
                case "camera":
                    dependency = this.loadCamera(index);
                    break;
                default:
                    dependency = this._invokeOne(function(ext) {
                        return ext != this && ext.getDependency && ext.getDependency(type, index);
                    });
                    if (!dependency) throw new Error("Unknown type: " + type);
                    break;
            }
            this.cache.add(cacheKey, dependency);
        }
        return dependency;
    }
    /**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */ getDependencies(type) {
        let dependencies = this.cache.get(type);
        if (!dependencies) {
            const parser = this;
            const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
            dependencies = Promise.all(defs.map(function(def, index) {
                return parser.getDependency(type, index);
            }));
            this.cache.add(type, dependencies);
        }
        return dependencies;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBuffer(bufferIndex) {
        const bufferDef = this.json.buffers[bufferIndex];
        const loader = this.fileLoader;
        if (bufferDef.type && bufferDef.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
        // If present, GLB container is required to be the first buffer.
        if (bufferDef.uri === undefined && bufferIndex === 0) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
        const options = this.options;
        return new Promise(function(resolve, reject) {
            loader.load((0, _three.LoaderUtils).resolveURL(bufferDef.uri, options.path), resolve, undefined, function() {
                reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
            });
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBufferView(bufferViewIndex) {
        const bufferViewDef = this.json.bufferViews[bufferViewIndex];
        return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
            const byteLength = bufferViewDef.byteLength || 0;
            const byteOffset = bufferViewDef.byteOffset || 0;
            return buffer.slice(byteOffset, byteOffset + byteLength);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */ loadAccessor(accessorIndex) {
        const parser = this;
        const json = this.json;
        const accessorDef = this.json.accessors[accessorIndex];
        if (accessorDef.bufferView === undefined && accessorDef.sparse === undefined) {
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            const normalized = accessorDef.normalized === true;
            const array = new TypedArray(accessorDef.count * itemSize);
            return Promise.resolve(new (0, _three.BufferAttribute)(array, itemSize, normalized));
        }
        const pendingBufferViews = [];
        if (accessorDef.bufferView !== undefined) pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
        else pendingBufferViews.push(null);
        if (accessorDef.sparse !== undefined) {
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
        }
        return Promise.all(pendingBufferViews).then(function(bufferViews) {
            const bufferView = bufferViews[0];
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
            const elementBytes = TypedArray.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessorDef.byteOffset || 0;
            const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[accessorDef.bufferView].byteStride : undefined;
            const normalized = accessorDef.normalized === true;
            let array, bufferAttribute;
            // The buffer is not interleaved if the stride is the item size in bytes.
            if (byteStride && byteStride !== itemBytes) {
                // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
                // This makes sure that IBA.count reflects accessor.count properly
                const ibSlice = Math.floor(byteOffset / byteStride);
                const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
                let ib = parser.cache.get(ibCacheKey);
                if (!ib) {
                    array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
                    // Integer parameters to IB/IBA are in array elements, not bytes.
                    ib = new (0, _three.InterleavedBuffer)(array, byteStride / elementBytes);
                    parser.cache.add(ibCacheKey, ib);
                }
                bufferAttribute = new (0, _three.InterleavedBufferAttribute)(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
            } else {
                if (bufferView === null) array = new TypedArray(accessorDef.count * itemSize);
                else array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
                bufferAttribute = new (0, _three.BufferAttribute)(array, itemSize, normalized);
            }
            // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
            if (accessorDef.sparse !== undefined) {
                const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
                const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
                const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
                const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
                const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
                const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
                if (bufferView !== null) // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
                bufferAttribute = new (0, _three.BufferAttribute)(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
                for(let i = 0, il = sparseIndices.length; i < il; i++){
                    const index = sparseIndices[i];
                    bufferAttribute.setX(index, sparseValues[i * itemSize]);
                    if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
                    if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
                    if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
                    if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return bufferAttribute;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture|null>}
	 */ loadTexture(textureIndex) {
        const json = this.json;
        const options = this.options;
        const textureDef = json.textures[textureIndex];
        const sourceIndex = textureDef.source;
        const sourceDef = json.images[sourceIndex];
        let loader = this.textureLoader;
        if (sourceDef.uri) {
            const handler = options.manager.getHandler(sourceDef.uri);
            if (handler !== null) loader = handler;
        }
        return this.loadTextureImage(textureIndex, sourceIndex, loader);
    }
    loadTextureImage(textureIndex, sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const textureDef = json.textures[textureIndex];
        const sourceDef = json.images[sourceIndex];
        const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
        if (this.textureCache[cacheKey]) // See https://github.com/mrdoob/three.js/issues/21559.
        return this.textureCache[cacheKey];
        const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
            texture.flipY = false;
            texture.name = textureDef.name || sourceDef.name || "";
            if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) texture.name = sourceDef.uri;
            const samplers = json.samplers || {};
            const sampler = samplers[textureDef.sampler] || {};
            texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || (0, _three.LinearFilter);
            texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || (0, _three.LinearMipmapLinearFilter);
            texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || (0, _three.RepeatWrapping);
            texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || (0, _three.RepeatWrapping);
            parser.associations.set(texture, {
                textures: textureIndex
            });
            return texture;
        }).catch(function() {
            return null;
        });
        this.textureCache[cacheKey] = promise;
        return promise;
    }
    loadImageSource(sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const options = this.options;
        if (this.sourceCache[sourceIndex] !== undefined) return this.sourceCache[sourceIndex].then((texture)=>texture.clone());
        const sourceDef = json.images[sourceIndex];
        const URL = self.URL || self.webkitURL;
        let sourceURI = sourceDef.uri || "";
        let isObjectURL = false;
        if (sourceDef.bufferView !== undefined) // Load binary image data from bufferView, if provided.
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
            isObjectURL = true;
            const blob = new Blob([
                bufferView
            ], {
                type: sourceDef.mimeType
            });
            sourceURI = URL.createObjectURL(blob);
            return sourceURI;
        });
        else if (sourceDef.uri === undefined) throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
        const promise = Promise.resolve(sourceURI).then(function(sourceURI) {
            return new Promise(function(resolve, reject) {
                let onLoad = resolve;
                if (loader.isImageBitmapLoader === true) onLoad = function(imageBitmap) {
                    const texture = new (0, _three.Texture)(imageBitmap);
                    texture.needsUpdate = true;
                    resolve(texture);
                };
                loader.load((0, _three.LoaderUtils).resolveURL(sourceURI, options.path), onLoad, undefined, reject);
            });
        }).then(function(texture) {
            // Clean up resources and configure Texture.
            if (isObjectURL === true) URL.revokeObjectURL(sourceURI);
            texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
            return texture;
        }).catch(function(error) {
            console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
            throw error;
        });
        this.sourceCache[sourceIndex] = promise;
        return promise;
    }
    /**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */ assignTexture(materialParams, mapName, mapDef, colorSpace) {
        const parser = this;
        return this.getDependency("texture", mapDef.index).then(function(texture) {
            if (!texture) return null;
            if (mapDef.texCoord !== undefined && mapDef.texCoord > 0) {
                texture = texture.clone();
                texture.channel = mapDef.texCoord;
            }
            if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
                const transform = mapDef.extensions !== undefined ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : undefined;
                if (transform) {
                    const gltfReference = parser.associations.get(texture);
                    texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
                    parser.associations.set(texture, gltfReference);
                }
            }
            if (colorSpace !== undefined) texture.colorSpace = colorSpace;
            materialParams[mapName] = texture;
            return texture;
        });
    }
    /**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */ assignFinalMaterial(mesh) {
        const geometry = mesh.geometry;
        let material = mesh.material;
        const useDerivativeTangents = geometry.attributes.tangent === undefined;
        const useVertexColors = geometry.attributes.color !== undefined;
        const useFlatShading = geometry.attributes.normal === undefined;
        if (mesh.isPoints) {
            const cacheKey = "PointsMaterial:" + material.uuid;
            let pointsMaterial = this.cache.get(cacheKey);
            if (!pointsMaterial) {
                pointsMaterial = new (0, _three.PointsMaterial)();
                (0, _three.Material).prototype.copy.call(pointsMaterial, material);
                pointsMaterial.color.copy(material.color);
                pointsMaterial.map = material.map;
                pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px
                this.cache.add(cacheKey, pointsMaterial);
            }
            material = pointsMaterial;
        } else if (mesh.isLine) {
            const cacheKey = "LineBasicMaterial:" + material.uuid;
            let lineMaterial = this.cache.get(cacheKey);
            if (!lineMaterial) {
                lineMaterial = new (0, _three.LineBasicMaterial)();
                (0, _three.Material).prototype.copy.call(lineMaterial, material);
                lineMaterial.color.copy(material.color);
                lineMaterial.map = material.map;
                this.cache.add(cacheKey, lineMaterial);
            }
            material = lineMaterial;
        }
        // Clone the material if it will be modified
        if (useDerivativeTangents || useVertexColors || useFlatShading) {
            let cacheKey = "ClonedMaterial:" + material.uuid + ":";
            if (useDerivativeTangents) cacheKey += "derivative-tangents:";
            if (useVertexColors) cacheKey += "vertex-colors:";
            if (useFlatShading) cacheKey += "flat-shading:";
            let cachedMaterial = this.cache.get(cacheKey);
            if (!cachedMaterial) {
                cachedMaterial = material.clone();
                if (useVertexColors) cachedMaterial.vertexColors = true;
                if (useFlatShading) cachedMaterial.flatShading = true;
                if (useDerivativeTangents) {
                    // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
                    if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
                    if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
                }
                this.cache.add(cacheKey, cachedMaterial);
                this.associations.set(cachedMaterial, this.associations.get(material));
            }
            material = cachedMaterial;
        }
        mesh.material = material;
    }
    getMaterialType() {
        return 0, _three.MeshStandardMaterial;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */ loadMaterial(materialIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const materialDef = json.materials[materialIndex];
        let materialType;
        const materialParams = {};
        const materialExtensions = materialDef.extensions || {};
        const pending = [];
        if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
            const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
            materialType = kmuExtension.getMaterialType();
            pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
        } else {
            // Specification:
            // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
            const metallicRoughness = materialDef.pbrMetallicRoughness || {};
            materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
            materialParams.opacity = 1.0;
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.SRGBColorSpace)));
            materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
            materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;
            if (metallicRoughness.metallicRoughnessTexture !== undefined) {
                pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
                pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
            }
            materialType = this._invokeOne(function(ext) {
                return ext.getMaterialType && ext.getMaterialType(materialIndex);
            });
            pending.push(Promise.all(this._invokeAll(function(ext) {
                return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
            })));
        }
        if (materialDef.doubleSided === true) materialParams.side = (0, _three.DoubleSide);
        const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
        if (alphaMode === ALPHA_MODES.BLEND) {
            materialParams.transparent = true;
            // See: https://github.com/mrdoob/three.js/issues/17706
            materialParams.depthWrite = false;
        } else {
            materialParams.transparent = false;
            if (alphaMode === ALPHA_MODES.MASK) materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
        }
        if (materialDef.normalTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
            materialParams.normalScale = new (0, _three.Vector2)(1, 1);
            if (materialDef.normalTexture.scale !== undefined) {
                const scale = materialDef.normalTexture.scale;
                materialParams.normalScale.set(scale, scale);
            }
        }
        if (materialDef.occlusionTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
            if (materialDef.occlusionTexture.strength !== undefined) materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
        if (materialDef.emissiveFactor !== undefined && materialType !== (0, _three.MeshBasicMaterial)) materialParams.emissive = new (0, _three.Color)().fromArray(materialDef.emissiveFactor);
        if (materialDef.emissiveTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, (0, _three.SRGBColorSpace)));
        return Promise.all(pending).then(function() {
            const material = new materialType(materialParams);
            if (materialDef.name) material.name = materialDef.name;
            assignExtrasToUserData(material, materialDef);
            parser.associations.set(material, {
                materials: materialIndex
            });
            if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
            return material;
        });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */ createUniqueName(originalName) {
        const sanitizedName = (0, _three.PropertyBinding).sanitizeNodeName(originalName || "");
        if (sanitizedName in this.nodeNamesUsed) return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
        else {
            this.nodeNamesUsed[sanitizedName] = 0;
            return sanitizedName;
        }
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */ loadGeometries(primitives) {
        const parser = this;
        const extensions = this.extensions;
        const cache = this.primitiveCache;
        function createDracoPrimitive(primitive) {
            return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
                return addPrimitiveAttributes(geometry, primitive, parser);
            });
        }
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const primitive = primitives[i];
            const cacheKey = createPrimitiveKey(primitive);
            // See if we've already created this geometry
            const cached = cache[cacheKey];
            if (cached) // Use the cached geometry if it exists
            pending.push(cached.promise);
            else {
                let geometryPromise;
                if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) // Use DRACO geometry if available
                geometryPromise = createDracoPrimitive(primitive);
                else // Otherwise create a new geometry
                geometryPromise = addPrimitiveAttributes(new (0, _three.BufferGeometry)(), primitive, parser);
                // Cache this geometry
                cache[cacheKey] = {
                    primitive: primitive,
                    promise: geometryPromise
                };
                pending.push(geometryPromise);
            }
        }
        return Promise.all(pending);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */ loadMesh(meshIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const meshDef = json.meshes[meshIndex];
        const primitives = meshDef.primitives;
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const material = primitives[i].material === undefined ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
            pending.push(material);
        }
        pending.push(parser.loadGeometries(primitives));
        return Promise.all(pending).then(function(results) {
            const materials = results.slice(0, results.length - 1);
            const geometries = results[results.length - 1];
            const meshes = [];
            for(let i = 0, il = geometries.length; i < il; i++){
                const geometry = geometries[i];
                const primitive = primitives[i];
                // 1. create Mesh
                let mesh;
                const material = materials[i];
                if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {
                    // .isSkinnedMesh isn't in glTF spec. See ._markDefs()
                    mesh = meshDef.isSkinnedMesh === true ? new (0, _three.SkinnedMesh)(geometry, material) : new (0, _three.Mesh)(geometry, material);
                    if (mesh.isSkinnedMesh === true) // normalize skin weights to fix malformed assets (see #15319)
                    mesh.normalizeSkinWeights();
                    if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) mesh.geometry = (0, _bufferGeometryUtilsJs.toTrianglesDrawMode)(mesh.geometry, (0, _three.TriangleStripDrawMode));
                    else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) mesh.geometry = (0, _bufferGeometryUtilsJs.toTrianglesDrawMode)(mesh.geometry, (0, _three.TriangleFanDrawMode));
                } else if (primitive.mode === WEBGL_CONSTANTS.LINES) mesh = new (0, _three.LineSegments)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) mesh = new (0, _three.Line)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) mesh = new (0, _three.LineLoop)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.POINTS) mesh = new (0, _three.Points)(geometry, material);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
                if (Object.keys(mesh.geometry.morphAttributes).length > 0) updateMorphTargets(mesh, meshDef);
                mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
                assignExtrasToUserData(mesh, meshDef);
                if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
                parser.assignFinalMaterial(mesh);
                meshes.push(mesh);
            }
            for(let i = 0, il = meshes.length; i < il; i++)parser.associations.set(meshes[i], {
                meshes: meshIndex,
                primitives: i
            });
            if (meshes.length === 1) {
                if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
                return meshes[0];
            }
            const group = new (0, _three.Group)();
            if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
            parser.associations.set(group, {
                meshes: meshIndex
            });
            for(let i = 0, il = meshes.length; i < il; i++)group.add(meshes[i]);
            return group;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */ loadCamera(cameraIndex) {
        let camera;
        const cameraDef = this.json.cameras[cameraIndex];
        const params = cameraDef[cameraDef.type];
        if (!params) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
        }
        if (cameraDef.type === "perspective") camera = new (0, _three.PerspectiveCamera)((0, _three.MathUtils).radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
        else if (cameraDef.type === "orthographic") camera = new (0, _three.OrthographicCamera)(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
        if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
        assignExtrasToUserData(camera, cameraDef);
        return Promise.resolve(camera);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Skeleton>}
	 */ loadSkin(skinIndex) {
        const skinDef = this.json.skins[skinIndex];
        const pending = [];
        for(let i = 0, il = skinDef.joints.length; i < il; i++)pending.push(this._loadNodeShallow(skinDef.joints[i]));
        if (skinDef.inverseBindMatrices !== undefined) pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
        else pending.push(null);
        return Promise.all(pending).then(function(results) {
            const inverseBindMatrices = results.pop();
            const jointNodes = results;
            // Note that bones (joint nodes) may or may not be in the
            // scene graph at this time.
            const bones = [];
            const boneInverses = [];
            for(let i = 0, il = jointNodes.length; i < il; i++){
                const jointNode = jointNodes[i];
                if (jointNode) {
                    bones.push(jointNode);
                    const mat = new (0, _three.Matrix4)();
                    if (inverseBindMatrices !== null) mat.fromArray(inverseBindMatrices.array, i * 16);
                    boneInverses.push(mat);
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i]);
            }
            return new (0, _three.Skeleton)(bones, boneInverses);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */ loadAnimation(animationIndex) {
        const json = this.json;
        const parser = this;
        const animationDef = json.animations[animationIndex];
        const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
        const pendingNodes = [];
        const pendingInputAccessors = [];
        const pendingOutputAccessors = [];
        const pendingSamplers = [];
        const pendingTargets = [];
        for(let i = 0, il = animationDef.channels.length; i < il; i++){
            const channel = animationDef.channels[i];
            const sampler = animationDef.samplers[channel.sampler];
            const target = channel.target;
            const name = target.node;
            const input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
            const output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;
            if (target.node === undefined) continue;
            pendingNodes.push(this.getDependency("node", name));
            pendingInputAccessors.push(this.getDependency("accessor", input));
            pendingOutputAccessors.push(this.getDependency("accessor", output));
            pendingSamplers.push(sampler);
            pendingTargets.push(target);
        }
        return Promise.all([
            Promise.all(pendingNodes),
            Promise.all(pendingInputAccessors),
            Promise.all(pendingOutputAccessors),
            Promise.all(pendingSamplers),
            Promise.all(pendingTargets)
        ]).then(function(dependencies) {
            const nodes = dependencies[0];
            const inputAccessors = dependencies[1];
            const outputAccessors = dependencies[2];
            const samplers = dependencies[3];
            const targets = dependencies[4];
            const tracks = [];
            for(let i = 0, il = nodes.length; i < il; i++){
                const node = nodes[i];
                const inputAccessor = inputAccessors[i];
                const outputAccessor = outputAccessors[i];
                const sampler = samplers[i];
                const target = targets[i];
                if (node === undefined) continue;
                if (node.updateMatrix) {
                    node.updateMatrix();
                    node.matrixAutoUpdate = true;
                }
                const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
                if (createdTracks) for(let k = 0; k < createdTracks.length; k++)tracks.push(createdTracks[k]);
            }
            return new (0, _three.AnimationClip)(animationName, undefined, tracks);
        });
    }
    createNodeMesh(nodeIndex) {
        const json = this.json;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        if (nodeDef.mesh === undefined) return null;
        return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
            const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
            // if weights are provided on the node, override weights on the mesh.
            if (nodeDef.weights !== undefined) node.traverse(function(o) {
                if (!o.isMesh) return;
                for(let i = 0, il = nodeDef.weights.length; i < il; i++)o.morphTargetInfluences[i] = nodeDef.weights[i];
            });
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */ loadNode(nodeIndex) {
        const json = this.json;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        const nodePending = parser._loadNodeShallow(nodeIndex);
        const childPending = [];
        const childrenDef = nodeDef.children || [];
        for(let i = 0, il = childrenDef.length; i < il; i++)childPending.push(parser.getDependency("node", childrenDef[i]));
        const skeletonPending = nodeDef.skin === undefined ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
        return Promise.all([
            nodePending,
            Promise.all(childPending),
            skeletonPending
        ]).then(function(results) {
            const node = results[0];
            const children = results[1];
            const skeleton = results[2];
            if (skeleton !== null) // This full traverse should be fine because
            // child glTF nodes have not been added to this node yet.
            node.traverse(function(mesh) {
                if (!mesh.isSkinnedMesh) return;
                mesh.bind(skeleton, _identityMatrix);
            });
            for(let i = 0, il = children.length; i < il; i++)node.add(children[i]);
            return node;
        });
    }
    // ._loadNodeShallow() parses a single node.
    // skin and child nodes are created and added in .loadNode() (no '_' prefix).
    _loadNodeShallow(nodeIndex) {
        const json = this.json;
        const extensions = this.extensions;
        const parser = this;
        // This method is called from .loadNode() and .loadSkin().
        // Cache a node to avoid duplication.
        if (this.nodeCache[nodeIndex] !== undefined) return this.nodeCache[nodeIndex];
        const nodeDef = json.nodes[nodeIndex];
        // reserve node's name before its dependencies, so the root has the intended name.
        const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
        const pending = [];
        const meshPromise = parser._invokeOne(function(ext) {
            return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
        });
        if (meshPromise) pending.push(meshPromise);
        if (nodeDef.camera !== undefined) pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
            return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
        parser._invokeAll(function(ext) {
            return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
        }).forEach(function(promise) {
            pending.push(promise);
        });
        this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
            let node;
            // .isBone isn't in glTF spec. See ._markDefs
            if (nodeDef.isBone === true) node = new (0, _three.Bone)();
            else if (objects.length > 1) node = new (0, _three.Group)();
            else if (objects.length === 1) node = objects[0];
            else node = new (0, _three.Object3D)();
            if (node !== objects[0]) for(let i = 0, il = objects.length; i < il; i++)node.add(objects[i]);
            if (nodeDef.name) {
                node.userData.name = nodeDef.name;
                node.name = nodeName;
            }
            assignExtrasToUserData(node, nodeDef);
            if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
            if (nodeDef.matrix !== undefined) {
                const matrix = new (0, _three.Matrix4)();
                matrix.fromArray(nodeDef.matrix);
                node.applyMatrix4(matrix);
            } else {
                if (nodeDef.translation !== undefined) node.position.fromArray(nodeDef.translation);
                if (nodeDef.rotation !== undefined) node.quaternion.fromArray(nodeDef.rotation);
                if (nodeDef.scale !== undefined) node.scale.fromArray(nodeDef.scale);
            }
            if (!parser.associations.has(node)) parser.associations.set(node, {});
            parser.associations.get(node).nodes = nodeIndex;
            return node;
        });
        return this.nodeCache[nodeIndex];
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */ loadScene(sceneIndex) {
        const extensions = this.extensions;
        const sceneDef = this.json.scenes[sceneIndex];
        const parser = this;
        // Loader returns Group, not Scene.
        // See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
        const scene = new (0, _three.Group)();
        if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
        assignExtrasToUserData(scene, sceneDef);
        if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
        const nodeIds = sceneDef.nodes || [];
        const pending = [];
        for(let i = 0, il = nodeIds.length; i < il; i++)pending.push(parser.getDependency("node", nodeIds[i]));
        return Promise.all(pending).then(function(nodes) {
            for(let i = 0, il = nodes.length; i < il; i++)scene.add(nodes[i]);
            // Removes dangling associations, associations that reference a node that
            // didn't make it into the scene.
            const reduceAssociations = (node)=>{
                const reducedAssociations = new Map();
                for (const [key, value] of parser.associations)if (key instanceof (0, _three.Material) || key instanceof (0, _three.Texture)) reducedAssociations.set(key, value);
                node.traverse((node)=>{
                    const mappings = parser.associations.get(node);
                    if (mappings != null) reducedAssociations.set(node, mappings);
                });
                return reducedAssociations;
            };
            parser.associations = reduceAssociations(scene);
            return scene;
        });
    }
    _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
        const tracks = [];
        const targetName = node.name ? node.name : node.uuid;
        const targetNames = [];
        if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) node.traverse(function(object) {
            if (object.morphTargetInfluences) targetNames.push(object.name ? object.name : object.uuid);
        });
        else targetNames.push(targetName);
        let TypedKeyframeTrack;
        switch(PATH_PROPERTIES[target.path]){
            case PATH_PROPERTIES.weights:
                TypedKeyframeTrack = (0, _three.NumberKeyframeTrack);
                break;
            case PATH_PROPERTIES.rotation:
                TypedKeyframeTrack = (0, _three.QuaternionKeyframeTrack);
                break;
            case PATH_PROPERTIES.position:
            case PATH_PROPERTIES.scale:
            default:
                switch(outputAccessor.itemSize){
                    case 1:
                        TypedKeyframeTrack = (0, _three.NumberKeyframeTrack);
                        break;
                    case 2:
                    case 3:
                        TypedKeyframeTrack = (0, _three.VectorKeyframeTrack);
                        break;
                }
                break;
        }
        const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : (0, _three.InterpolateLinear);
        const outputArray = this._getArrayFromAccessor(outputAccessor);
        for(let j = 0, jl = targetNames.length; j < jl; j++){
            const track = new TypedKeyframeTrack(targetNames[j] + "." + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
            // Override interpolation with custom factory method.
            if (interpolation === "CUBICSPLINE") this._createCubicSplineTrackInterpolant(track);
            tracks.push(track);
        }
        return tracks;
    }
    _getArrayFromAccessor(accessor) {
        let outputArray = accessor.array;
        if (accessor.normalized) {
            const scale = getNormalizedComponentScale(outputArray.constructor);
            const scaled = new Float32Array(outputArray.length);
            for(let j = 0, jl = outputArray.length; j < jl; j++)scaled[j] = outputArray[j] * scale;
            outputArray = scaled;
        }
        return outputArray;
    }
    _createCubicSplineTrackInterpolant(track) {
        track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
            // A CUBICSPLINE keyframe in glTF has three output values for each input value,
            // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
            // must be divided by three to get the interpolant's sampleSize argument.
            const interpolantType = this instanceof (0, _three.QuaternionKeyframeTrack) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
            return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
        };
        // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
        track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */ function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new (0, _three.Box3)();
    if (attributes.POSITION !== undefined) {
        const accessor = parser.json.accessors[attributes.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
        if (min !== undefined && max !== undefined) {
            box.set(new (0, _three.Vector3)(min[0], min[1], min[2]), new (0, _three.Vector3)(max[0], max[1], max[2]));
            if (accessor.normalized) {
                const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                box.min.multiplyScalar(boxScale);
                box.max.multiplyScalar(boxScale);
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
        }
    } else return;
    const targets = primitiveDef.targets;
    if (targets !== undefined) {
        const maxDisplacement = new (0, _three.Vector3)();
        const vector = new (0, _three.Vector3)();
        for(let i = 0, il = targets.length; i < il; i++){
            const target = targets[i];
            if (target.POSITION !== undefined) {
                const accessor = parser.json.accessors[target.POSITION];
                const min = accessor.min;
                const max = accessor.max;
                // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
                if (min !== undefined && max !== undefined) {
                    // we need to get max of absolute components because target weight is [-1,1]
                    vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
                    vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
                    vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
                    if (accessor.normalized) {
                        const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                        vector.multiplyScalar(boxScale);
                    }
                    // Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
                    // to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
                    // are used to implement key-frame animations and as such only two are active at a time - this results in very large
                    // boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
                    maxDisplacement.max(vector);
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
        }
        // As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
        box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new (0, _three.Sphere)();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
        return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
            geometry.setAttribute(attributeName, accessor);
        });
    }
    for(const gltfAttributeName in attributes){
        const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
        // Skip attributes already provided by e.g. Draco extension.
        if (threeAttributeName in geometry.attributes) continue;
        pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== undefined && !geometry.index) {
        const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor) {
            geometry.setIndex(accessor);
        });
        pending.push(accessor);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
        return primitiveDef.targets !== undefined ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
}

},{"three":"ktPTu","../utils/BufferGeometryUtils.js":"5o7x9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5o7x9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {BufferAttribute}
 * @return {BufferAttribute}
 */ parcelHelpers.export(exports, "deepCloneAttribute", ()=>deepCloneAttribute);
// returns a new, non-interleaved version of the provided attribute
parcelHelpers.export(exports, "deinterleaveAttribute", ()=>deinterleaveAttribute);
// deinterleaves all attributes on the geometry
parcelHelpers.export(exports, "deinterleaveGeometry", ()=>deinterleaveGeometry);
parcelHelpers.export(exports, "computeMikkTSpaceTangents", ()=>computeMikkTSpaceTangents);
parcelHelpers.export(exports, "mergeGeometries", ()=>mergeGeometries);
parcelHelpers.export(exports, "mergeBufferGeometries", ()=>mergeBufferGeometries);
parcelHelpers.export(exports, "mergeAttributes", ()=>mergeAttributes);
parcelHelpers.export(exports, "mergeBufferAttributes", ()=>mergeBufferAttributes);
parcelHelpers.export(exports, "interleaveAttributes", ()=>interleaveAttributes);
parcelHelpers.export(exports, "estimateBytesUsed", ()=>estimateBytesUsed);
parcelHelpers.export(exports, "mergeVertices", ()=>mergeVertices);
parcelHelpers.export(exports, "toTrianglesDrawMode", ()=>toTrianglesDrawMode);
parcelHelpers.export(exports, "computeMorphedAttributes", ()=>computeMorphedAttributes);
parcelHelpers.export(exports, "mergeGroups", ()=>mergeGroups);
parcelHelpers.export(exports, "toCreasedNormals", ()=>toCreasedNormals);
var _three = require("three");
function computeMikkTSpaceTangents(geometry, MikkTSpace, negateSign = true) {
    if (!MikkTSpace || !MikkTSpace.isReady) throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");
    if (!geometry.hasAttribute("position") || !geometry.hasAttribute("normal") || !geometry.hasAttribute("uv")) throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');
    function getAttributeArray(attribute) {
        if (attribute.normalized || attribute.isInterleavedBufferAttribute) {
            const dstArray = new Float32Array(attribute.count * attribute.itemSize);
            for(let i = 0, j = 0; i < attribute.count; i++){
                dstArray[j++] = attribute.getX(i);
                dstArray[j++] = attribute.getY(i);
                if (attribute.itemSize > 2) dstArray[j++] = attribute.getZ(i);
            }
            return dstArray;
        }
        if (attribute.array instanceof Float32Array) return attribute.array;
        return new Float32Array(attribute.array);
    }
    // MikkTSpace algorithm requires non-indexed input.
    const _geometry = geometry.index ? geometry.toNonIndexed() : geometry;
    // Compute vertex tangents.
    const tangents = MikkTSpace.generateTangents(getAttributeArray(_geometry.attributes.position), getAttributeArray(_geometry.attributes.normal), getAttributeArray(_geometry.attributes.uv));
    // Texture coordinate convention of glTF differs from the apparent
    // default of the MikkTSpace library; .w component must be flipped.
    if (negateSign) for(let i = 3; i < tangents.length; i += 4)tangents[i] *= -1;
    //
    _geometry.setAttribute("tangent", new (0, _three.BufferAttribute)(tangents, 4));
    if (geometry !== _geometry) geometry.copy(_geometry);
    return geometry;
}
/**
 * @param  {Array<BufferGeometry>} geometries
 * @param  {Boolean} useGroups
 * @return {BufferGeometry}
 */ function mergeGeometries(geometries, useGroups = false) {
    const isIndexed = geometries[0].index !== null;
    const attributesUsed = new Set(Object.keys(geometries[0].attributes));
    const morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
    const attributes = {};
    const morphAttributes = {};
    const morphTargetsRelative = geometries[0].morphTargetsRelative;
    const mergedGeometry = new (0, _three.BufferGeometry)();
    let offset = 0;
    for(let i = 0; i < geometries.length; ++i){
        const geometry = geometries[i];
        let attributesCount = 0;
        // ensure that all geometries are indexed, or none
        if (isIndexed !== (geometry.index !== null)) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
            return null;
        }
        // gather attributes, exit early if they're different
        for(const name in geometry.attributes){
            if (!attributesUsed.has(name)) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
                return null;
            }
            if (attributes[name] === undefined) attributes[name] = [];
            attributes[name].push(geometry.attributes[name]);
            attributesCount++;
        }
        // ensure geometries have the same number of attributes
        if (attributesCount !== attributesUsed.size) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". Make sure all geometries have the same number of attributes.");
            return null;
        }
        // gather morph attributes, exit early if they're different
        if (morphTargetsRelative !== geometry.morphTargetsRelative) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". .morphTargetsRelative must be consistent throughout all geometries.");
            return null;
        }
        for(const name in geometry.morphAttributes){
            if (!morphAttributesUsed.has(name)) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ".  .morphAttributes must be consistent throughout all geometries.");
                return null;
            }
            if (morphAttributes[name] === undefined) morphAttributes[name] = [];
            morphAttributes[name].push(geometry.morphAttributes[name]);
        }
        if (useGroups) {
            let count;
            if (isIndexed) count = geometry.index.count;
            else if (geometry.attributes.position !== undefined) count = geometry.attributes.position.count;
            else {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + i + ". The geometry must have either an index or a position attribute");
                return null;
            }
            mergedGeometry.addGroup(offset, count, i);
            offset += count;
        }
    }
    // merge indices
    if (isIndexed) {
        let indexOffset = 0;
        const mergedIndex = [];
        for(let i = 0; i < geometries.length; ++i){
            const index = geometries[i].index;
            for(let j = 0; j < index.count; ++j)mergedIndex.push(index.getX(j) + indexOffset);
            indexOffset += geometries[i].attributes.position.count;
        }
        mergedGeometry.setIndex(mergedIndex);
    }
    // merge attributes
    for(const name in attributes){
        const mergedAttribute = mergeAttributes(attributes[name]);
        if (!mergedAttribute) {
            console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " attribute.");
            return null;
        }
        mergedGeometry.setAttribute(name, mergedAttribute);
    }
    // merge morph attributes
    for(const name in morphAttributes){
        const numMorphTargets = morphAttributes[name][0].length;
        if (numMorphTargets === 0) break;
        mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
        mergedGeometry.morphAttributes[name] = [];
        for(let i = 0; i < numMorphTargets; ++i){
            const morphAttributesToMerge = [];
            for(let j = 0; j < morphAttributes[name].length; ++j)morphAttributesToMerge.push(morphAttributes[name][j][i]);
            const mergedMorphAttribute = mergeAttributes(morphAttributesToMerge);
            if (!mergedMorphAttribute) {
                console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + name + " morphAttribute.");
                return null;
            }
            mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
        }
    }
    return mergedGeometry;
}
/**
 * @param {Array<BufferAttribute>} attributes
 * @return {BufferAttribute}
 */ function mergeAttributes(attributes) {
    let TypedArray;
    let itemSize;
    let normalized;
    let gpuType = -1;
    let arrayLength = 0;
    for(let i = 0; i < attributes.length; ++i){
        const attribute = attributes[i];
        if (attribute.isInterleavedBufferAttribute) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.");
            return null;
        }
        if (TypedArray === undefined) TypedArray = attribute.array.constructor;
        if (TypedArray !== attribute.array.constructor) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.");
            return null;
        }
        if (itemSize === undefined) itemSize = attribute.itemSize;
        if (itemSize !== attribute.itemSize) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.");
            return null;
        }
        if (normalized === undefined) normalized = attribute.normalized;
        if (normalized !== attribute.normalized) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.");
            return null;
        }
        if (gpuType === -1) gpuType = attribute.gpuType;
        if (gpuType !== attribute.gpuType) {
            console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.");
            return null;
        }
        arrayLength += attribute.array.length;
    }
    const array = new TypedArray(arrayLength);
    let offset = 0;
    for(let i = 0; i < attributes.length; ++i){
        array.set(attributes[i].array, offset);
        offset += attributes[i].array.length;
    }
    const result = new (0, _three.BufferAttribute)(array, itemSize, normalized);
    if (gpuType !== undefined) result.gpuType = gpuType;
    return result;
}
function deepCloneAttribute(attribute) {
    if (attribute.isInstancedInterleavedBufferAttribute || attribute.isInterleavedBufferAttribute) return deinterleaveAttribute(attribute);
    if (attribute.isInstancedBufferAttribute) return new (0, _three.InstancedBufferAttribute)().copy(attribute);
    return new (0, _three.BufferAttribute)().copy(attribute);
}
/**
 * @param {Array<BufferAttribute>} attributes
 * @return {Array<InterleavedBufferAttribute>}
 */ function interleaveAttributes(attributes) {
    // Interleaves the provided attributes into an InterleavedBuffer and returns
    // a set of InterleavedBufferAttributes for each attribute
    let TypedArray;
    let arrayLength = 0;
    let stride = 0;
    // calculate the length and type of the interleavedBuffer
    for(let i = 0, l = attributes.length; i < l; ++i){
        const attribute = attributes[i];
        if (TypedArray === undefined) TypedArray = attribute.array.constructor;
        if (TypedArray !== attribute.array.constructor) {
            console.error("AttributeBuffers of different types cannot be interleaved");
            return null;
        }
        arrayLength += attribute.array.length;
        stride += attribute.itemSize;
    }
    // Create the set of buffer attributes
    const interleavedBuffer = new (0, _three.InterleavedBuffer)(new TypedArray(arrayLength), stride);
    let offset = 0;
    const res = [];
    const getters = [
        "getX",
        "getY",
        "getZ",
        "getW"
    ];
    const setters = [
        "setX",
        "setY",
        "setZ",
        "setW"
    ];
    for(let j = 0, l = attributes.length; j < l; j++){
        const attribute = attributes[j];
        const itemSize = attribute.itemSize;
        const count = attribute.count;
        const iba = new (0, _three.InterleavedBufferAttribute)(interleavedBuffer, itemSize, offset, attribute.normalized);
        res.push(iba);
        offset += itemSize;
        // Move the data for each attribute into the new interleavedBuffer
        // at the appropriate offset
        for(let c = 0; c < count; c++)for(let k = 0; k < itemSize; k++)iba[setters[k]](c, attribute[getters[k]](c));
    }
    return res;
}
function deinterleaveAttribute(attribute) {
    const cons = attribute.data.array.constructor;
    const count = attribute.count;
    const itemSize = attribute.itemSize;
    const normalized = attribute.normalized;
    const array = new cons(count * itemSize);
    let newAttribute;
    if (attribute.isInstancedInterleavedBufferAttribute) newAttribute = new (0, _three.InstancedBufferAttribute)(array, itemSize, normalized, attribute.meshPerAttribute);
    else newAttribute = new (0, _three.BufferAttribute)(array, itemSize, normalized);
    for(let i = 0; i < count; i++){
        newAttribute.setX(i, attribute.getX(i));
        if (itemSize >= 2) newAttribute.setY(i, attribute.getY(i));
        if (itemSize >= 3) newAttribute.setZ(i, attribute.getZ(i));
        if (itemSize >= 4) newAttribute.setW(i, attribute.getW(i));
    }
    return newAttribute;
}
function deinterleaveGeometry(geometry) {
    const attributes = geometry.attributes;
    const morphTargets = geometry.morphTargets;
    const attrMap = new Map();
    for(const key in attributes){
        const attr = attributes[key];
        if (attr.isInterleavedBufferAttribute) {
            if (!attrMap.has(attr)) attrMap.set(attr, deinterleaveAttribute(attr));
            attributes[key] = attrMap.get(attr);
        }
    }
    for(const key in morphTargets){
        const attr = morphTargets[key];
        if (attr.isInterleavedBufferAttribute) {
            if (!attrMap.has(attr)) attrMap.set(attr, deinterleaveAttribute(attr));
            morphTargets[key] = attrMap.get(attr);
        }
    }
}
/**
 * @param {Array<BufferGeometry>} geometry
 * @return {number}
 */ function estimateBytesUsed(geometry) {
    // Return the estimated memory used by this geometry in bytes
    // Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
    // for InterleavedBufferAttributes.
    let mem = 0;
    for(const name in geometry.attributes){
        const attr = geometry.getAttribute(name);
        mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;
    }
    const indices = geometry.getIndex();
    mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
    return mem;
}
/**
 * @param {BufferGeometry} geometry
 * @param {number} tolerance
 * @return {BufferGeometry}
 */ function mergeVertices(geometry, tolerance = 1e-4) {
    tolerance = Math.max(tolerance, Number.EPSILON);
    // Generate an index buffer if the geometry doesn't have one, or optimize it
    // if it's already available.
    const hashToIndex = {};
    const indices = geometry.getIndex();
    const positions = geometry.getAttribute("position");
    const vertexCount = indices ? indices.count : positions.count;
    // next value for triangle indices
    let nextIndex = 0;
    // attributes and new attribute arrays
    const attributeNames = Object.keys(geometry.attributes);
    const tmpAttributes = {};
    const tmpMorphAttributes = {};
    const newIndices = [];
    const getters = [
        "getX",
        "getY",
        "getZ",
        "getW"
    ];
    const setters = [
        "setX",
        "setY",
        "setZ",
        "setW"
    ];
    // Initialize the arrays, allocating space conservatively. Extra
    // space will be trimmed in the last step.
    for(let i = 0, l = attributeNames.length; i < l; i++){
        const name = attributeNames[i];
        const attr = geometry.attributes[name];
        tmpAttributes[name] = new (0, _three.BufferAttribute)(new attr.array.constructor(attr.count * attr.itemSize), attr.itemSize, attr.normalized);
        const morphAttr = geometry.morphAttributes[name];
        if (morphAttr) tmpMorphAttributes[name] = new (0, _three.BufferAttribute)(new morphAttr.array.constructor(morphAttr.count * morphAttr.itemSize), morphAttr.itemSize, morphAttr.normalized);
    }
    // convert the error tolerance to an amount of decimal places to truncate to
    const decimalShift = Math.log10(1 / tolerance);
    const shiftMultiplier = Math.pow(10, decimalShift);
    for(let i = 0; i < vertexCount; i++){
        const index = indices ? indices.getX(i) : i;
        // Generate a hash for the vertex attributes at the current index 'i'
        let hash = "";
        for(let j = 0, l = attributeNames.length; j < l; j++){
            const name = attributeNames[j];
            const attribute = geometry.getAttribute(name);
            const itemSize = attribute.itemSize;
            for(let k = 0; k < itemSize; k++)// double tilde truncates the decimal value
            hash += `${~~(attribute[getters[k]](index) * shiftMultiplier)},`;
        }
        // Add another reference to the vertex if it's already
        // used by another index
        if (hash in hashToIndex) newIndices.push(hashToIndex[hash]);
        else {
            // copy data to the new index in the temporary attributes
            for(let j = 0, l = attributeNames.length; j < l; j++){
                const name = attributeNames[j];
                const attribute = geometry.getAttribute(name);
                const morphAttr = geometry.morphAttributes[name];
                const itemSize = attribute.itemSize;
                const newarray = tmpAttributes[name];
                const newMorphArrays = tmpMorphAttributes[name];
                for(let k = 0; k < itemSize; k++){
                    const getterFunc = getters[k];
                    const setterFunc = setters[k];
                    newarray[setterFunc](nextIndex, attribute[getterFunc](index));
                    if (morphAttr) for(let m = 0, ml = morphAttr.length; m < ml; m++)newMorphArrays[m][setterFunc](nextIndex, morphAttr[m][getterFunc](index));
                }
            }
            hashToIndex[hash] = nextIndex;
            newIndices.push(nextIndex);
            nextIndex++;
        }
    }
    // generate result BufferGeometry
    const result = geometry.clone();
    for(const name in geometry.attributes){
        const tmpAttribute = tmpAttributes[name];
        result.setAttribute(name, new (0, _three.BufferAttribute)(tmpAttribute.array.slice(0, nextIndex * tmpAttribute.itemSize), tmpAttribute.itemSize, tmpAttribute.normalized));
        if (!(name in tmpMorphAttributes)) continue;
        for(let j = 0; j < tmpMorphAttributes[name].length; j++){
            const tmpMorphAttribute = tmpMorphAttributes[name][j];
            result.morphAttributes[name][j] = new (0, _three.BufferAttribute)(tmpMorphAttribute.array.slice(0, nextIndex * tmpMorphAttribute.itemSize), tmpMorphAttribute.itemSize, tmpMorphAttribute.normalized);
        }
    }
    // indices
    result.setIndex(newIndices);
    return result;
}
/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry}
 */ function toTrianglesDrawMode(geometry, drawMode) {
    if (drawMode === (0, _three.TrianglesDrawMode)) {
        console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
        return geometry;
    }
    if (drawMode === (0, _three.TriangleFanDrawMode) || drawMode === (0, _three.TriangleStripDrawMode)) {
        let index = geometry.getIndex();
        // generate index if not present
        if (index === null) {
            const indices = [];
            const position = geometry.getAttribute("position");
            if (position !== undefined) {
                for(let i = 0; i < position.count; i++)indices.push(i);
                geometry.setIndex(indices);
                index = geometry.getIndex();
            } else {
                console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
                return geometry;
            }
        }
        //
        const numberOfTriangles = index.count - 2;
        const newIndices = [];
        if (drawMode === (0, _three.TriangleFanDrawMode)) // gl.TRIANGLE_FAN
        for(let i = 1; i <= numberOfTriangles; i++){
            newIndices.push(index.getX(0));
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
        }
        else {
            // gl.TRIANGLE_STRIP
            for(let i = 0; i < numberOfTriangles; i++)if (i % 2 === 0) {
                newIndices.push(index.getX(i));
                newIndices.push(index.getX(i + 1));
                newIndices.push(index.getX(i + 2));
            } else {
                newIndices.push(index.getX(i + 2));
                newIndices.push(index.getX(i + 1));
                newIndices.push(index.getX(i));
            }
        }
        if (newIndices.length / 3 !== numberOfTriangles) console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        // build final geometry
        const newGeometry = geometry.clone();
        newGeometry.setIndex(newIndices);
        newGeometry.clearGroups();
        return newGeometry;
    } else {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
        return geometry;
    }
}
/**
 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
 * Helpful for Raytracing or Decals.
 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
 * @return {Object} An Object with original position/normal attributes and morphed ones.
 */ function computeMorphedAttributes(object) {
    const _vA = new (0, _three.Vector3)();
    const _vB = new (0, _three.Vector3)();
    const _vC = new (0, _three.Vector3)();
    const _tempA = new (0, _three.Vector3)();
    const _tempB = new (0, _three.Vector3)();
    const _tempC = new (0, _three.Vector3)();
    const _morphA = new (0, _three.Vector3)();
    const _morphB = new (0, _three.Vector3)();
    const _morphC = new (0, _three.Vector3)();
    function _calculateMorphedAttributeData(object, attribute, morphAttribute, morphTargetsRelative, a, b, c, modifiedAttributeArray) {
        _vA.fromBufferAttribute(attribute, a);
        _vB.fromBufferAttribute(attribute, b);
        _vC.fromBufferAttribute(attribute, c);
        const morphInfluences = object.morphTargetInfluences;
        if (morphAttribute && morphInfluences) {
            _morphA.set(0, 0, 0);
            _morphB.set(0, 0, 0);
            _morphC.set(0, 0, 0);
            for(let i = 0, il = morphAttribute.length; i < il; i++){
                const influence = morphInfluences[i];
                const morph = morphAttribute[i];
                if (influence === 0) continue;
                _tempA.fromBufferAttribute(morph, a);
                _tempB.fromBufferAttribute(morph, b);
                _tempC.fromBufferAttribute(morph, c);
                if (morphTargetsRelative) {
                    _morphA.addScaledVector(_tempA, influence);
                    _morphB.addScaledVector(_tempB, influence);
                    _morphC.addScaledVector(_tempC, influence);
                } else {
                    _morphA.addScaledVector(_tempA.sub(_vA), influence);
                    _morphB.addScaledVector(_tempB.sub(_vB), influence);
                    _morphC.addScaledVector(_tempC.sub(_vC), influence);
                }
            }
            _vA.add(_morphA);
            _vB.add(_morphB);
            _vC.add(_morphC);
        }
        if (object.isSkinnedMesh) {
            object.applyBoneTransform(a, _vA);
            object.applyBoneTransform(b, _vB);
            object.applyBoneTransform(c, _vC);
        }
        modifiedAttributeArray[a * 3 + 0] = _vA.x;
        modifiedAttributeArray[a * 3 + 1] = _vA.y;
        modifiedAttributeArray[a * 3 + 2] = _vA.z;
        modifiedAttributeArray[b * 3 + 0] = _vB.x;
        modifiedAttributeArray[b * 3 + 1] = _vB.y;
        modifiedAttributeArray[b * 3 + 2] = _vB.z;
        modifiedAttributeArray[c * 3 + 0] = _vC.x;
        modifiedAttributeArray[c * 3 + 1] = _vC.y;
        modifiedAttributeArray[c * 3 + 2] = _vC.z;
    }
    const geometry = object.geometry;
    const material = object.material;
    let a, b, c;
    const index = geometry.index;
    const positionAttribute = geometry.attributes.position;
    const morphPosition = geometry.morphAttributes.position;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    const normalAttribute = geometry.attributes.normal;
    const morphNormal = geometry.morphAttributes.position;
    const groups = geometry.groups;
    const drawRange = geometry.drawRange;
    let i, j, il, jl;
    let group;
    let start, end;
    const modifiedPosition = new Float32Array(positionAttribute.count * positionAttribute.itemSize);
    const modifiedNormal = new Float32Array(normalAttribute.count * normalAttribute.itemSize);
    if (index !== null) {
        // indexed buffer geometry
        if (Array.isArray(material)) for(i = 0, il = groups.length; i < il; i++){
            group = groups[i];
            start = Math.max(group.start, drawRange.start);
            end = Math.min(group.start + group.count, drawRange.start + drawRange.count);
            for(j = start, jl = end; j < jl; j += 3){
                a = index.getX(j);
                b = index.getX(j + 1);
                c = index.getX(j + 2);
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
        else {
            start = Math.max(0, drawRange.start);
            end = Math.min(index.count, drawRange.start + drawRange.count);
            for(i = start, il = end; i < il; i += 3){
                a = index.getX(i);
                b = index.getX(i + 1);
                c = index.getX(i + 2);
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
    } else {
        // non-indexed buffer geometry
        if (Array.isArray(material)) for(i = 0, il = groups.length; i < il; i++){
            group = groups[i];
            start = Math.max(group.start, drawRange.start);
            end = Math.min(group.start + group.count, drawRange.start + drawRange.count);
            for(j = start, jl = end; j < jl; j += 3){
                a = j;
                b = j + 1;
                c = j + 2;
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
        else {
            start = Math.max(0, drawRange.start);
            end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
            for(i = start, il = end; i < il; i += 3){
                a = i;
                b = i + 1;
                c = i + 2;
                _calculateMorphedAttributeData(object, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);
                _calculateMorphedAttributeData(object, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
            }
        }
    }
    const morphedPositionAttribute = new (0, _three.Float32BufferAttribute)(modifiedPosition, 3);
    const morphedNormalAttribute = new (0, _three.Float32BufferAttribute)(modifiedNormal, 3);
    return {
        positionAttribute: positionAttribute,
        normalAttribute: normalAttribute,
        morphedPositionAttribute: morphedPositionAttribute,
        morphedNormalAttribute: morphedNormalAttribute
    };
}
function mergeGroups(geometry) {
    if (geometry.groups.length === 0) {
        console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge.");
        return geometry;
    }
    let groups = geometry.groups;
    // sort groups by material index
    groups = groups.sort((a, b)=>{
        if (a.materialIndex !== b.materialIndex) return a.materialIndex - b.materialIndex;
        return a.start - b.start;
    });
    // create index for non-indexed geometries
    if (geometry.getIndex() === null) {
        const positionAttribute = geometry.getAttribute("position");
        const indices = [];
        for(let i = 0; i < positionAttribute.count; i += 3)indices.push(i, i + 1, i + 2);
        geometry.setIndex(indices);
    }
    // sort index
    const index = geometry.getIndex();
    const newIndices = [];
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        const groupStart = group.start;
        const groupLength = groupStart + group.count;
        for(let j = groupStart; j < groupLength; j++)newIndices.push(index.getX(j));
    }
    geometry.dispose(); // Required to force buffer recreation
    geometry.setIndex(newIndices);
    // update groups indices
    let start = 0;
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        group.start = start;
        start += group.count;
    }
    // merge groups
    let currentGroup = groups[0];
    geometry.groups = [
        currentGroup
    ];
    for(let i = 1; i < groups.length; i++){
        const group = groups[i];
        if (currentGroup.materialIndex === group.materialIndex) currentGroup.count += group.count;
        else {
            currentGroup = group;
            geometry.groups.push(currentGroup);
        }
    }
    return geometry;
}
// Creates a new, non-indexed geometry with smooth normals everywhere except faces that meet at
// an angle greater than the crease angle.
function toCreasedNormals(geometry, creaseAngle = Math.PI / 3 /* 60 degrees */ ) {
    const creaseDot = Math.cos(creaseAngle);
    const hashMultiplier = (1 + 1e-10) * 1e2;
    // reusable vertors
    const verts = [
        new (0, _three.Vector3)(),
        new (0, _three.Vector3)(),
        new (0, _three.Vector3)()
    ];
    const tempVec1 = new (0, _three.Vector3)();
    const tempVec2 = new (0, _three.Vector3)();
    const tempNorm = new (0, _three.Vector3)();
    const tempNorm2 = new (0, _three.Vector3)();
    // hashes a vector
    function hashVertex(v) {
        const x = ~~(v.x * hashMultiplier);
        const y = ~~(v.y * hashMultiplier);
        const z = ~~(v.z * hashMultiplier);
        return `${x},${y},${z}`;
    }
    const resultGeometry = geometry.toNonIndexed();
    const posAttr = resultGeometry.attributes.position;
    const vertexMap = {};
    // find all the normals shared by commonly located vertices
    for(let i = 0, l = posAttr.count / 3; i < l; i++){
        const i3 = 3 * i;
        const a = verts[0].fromBufferAttribute(posAttr, i3 + 0);
        const b = verts[1].fromBufferAttribute(posAttr, i3 + 1);
        const c = verts[2].fromBufferAttribute(posAttr, i3 + 2);
        tempVec1.subVectors(c, b);
        tempVec2.subVectors(a, b);
        // add the normal to the map for all vertices
        const normal = new (0, _three.Vector3)().crossVectors(tempVec1, tempVec2).normalize();
        for(let n = 0; n < 3; n++){
            const vert = verts[n];
            const hash = hashVertex(vert);
            if (!(hash in vertexMap)) vertexMap[hash] = [];
            vertexMap[hash].push(normal);
        }
    }
    // average normals from all vertices that share a common location if they are within the
    // provided crease threshold
    const normalArray = new Float32Array(posAttr.count * 3);
    const normAttr = new (0, _three.BufferAttribute)(normalArray, 3, false);
    for(let i = 0, l = posAttr.count / 3; i < l; i++){
        // get the face normal for this vertex
        const i3 = 3 * i;
        const a = verts[0].fromBufferAttribute(posAttr, i3 + 0);
        const b = verts[1].fromBufferAttribute(posAttr, i3 + 1);
        const c = verts[2].fromBufferAttribute(posAttr, i3 + 2);
        tempVec1.subVectors(c, b);
        tempVec2.subVectors(a, b);
        tempNorm.crossVectors(tempVec1, tempVec2).normalize();
        // average all normals that meet the threshold and set the normal value
        for(let n = 0; n < 3; n++){
            const vert = verts[n];
            const hash = hashVertex(vert);
            const otherNormals = vertexMap[hash];
            tempNorm2.set(0, 0, 0);
            for(let k = 0, lk = otherNormals.length; k < lk; k++){
                const otherNorm = otherNormals[k];
                if (tempNorm.dot(otherNorm) > creaseDot) tempNorm2.add(otherNorm);
            }
            tempNorm2.normalize();
            normAttr.setXYZ(i3 + n, tempNorm2.x, tempNorm2.y, tempNorm2.z);
        }
    }
    resultGeometry.setAttribute("normal", normAttr);
    return resultGeometry;
}
function mergeBufferGeometries(geometries, useGroups = false) {
    console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."); // @deprecated, r151
    return mergeGeometries(geometries, useGroups);
}
function mergeBufferAttributes(attributes) {
    console.warn("THREE.BufferGeometryUtils: mergeBufferAttributes() has been renamed to mergeAttributes()."); // @deprecated, r151
    return mergeAttributes(attributes);
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htIhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OBJLoader", ()=>OBJLoader);
var _three = require("three");
// o object_name | g group_name
const _object_pattern = /^[og]\s*(.+)?/;
// mtllib file_reference
const _material_library_pattern = /^mtllib /;
// usemtl material_name
const _material_use_pattern = /^usemtl /;
// usemap map_name
const _map_use_pattern = /^usemap /;
const _face_vertex_data_separator_pattern = /\s+/;
const _vA = new (0, _three.Vector3)();
const _vB = new (0, _three.Vector3)();
const _vC = new (0, _three.Vector3)();
const _ab = new (0, _three.Vector3)();
const _cb = new (0, _three.Vector3)();
const _color = new (0, _three.Color)();
function ParserState() {
    const state = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(name, fromDeclaration) {
            // If the current object (initial from reset) is not from a g/o declaration in the parsed
            // file. We need to use it for the first parsed g/o to keep things in sync.
            if (this.object && this.object.fromDeclaration === false) {
                this.object.name = name;
                this.object.fromDeclaration = fromDeclaration !== false;
                return;
            }
            const previousMaterial = this.object && typeof this.object.currentMaterial === "function" ? this.object.currentMaterial() : undefined;
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
            this.object = {
                name: name || "",
                fromDeclaration: fromDeclaration !== false,
                geometry: {
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    hasUVIndices: false
                },
                materials: [],
                smooth: true,
                startMaterial: function(name, libraries) {
                    const previous = this._finalize(false);
                    // New usemtl declaration overwrites an inherited material, except if faces were declared
                    // after the material, then it must be preserved for proper MultiMaterial continuation.
                    if (previous && (previous.inherited || previous.groupCount <= 0)) this.materials.splice(previous.index, 1);
                    const material = {
                        index: this.materials.length,
                        name: name || "",
                        mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : "",
                        smooth: previous !== undefined ? previous.smooth : this.smooth,
                        groupStart: previous !== undefined ? previous.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: false,
                        clone: function(index) {
                            const cloned = {
                                index: typeof index === "number" ? index : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: false
                            };
                            cloned.clone = this.clone.bind(cloned);
                            return cloned;
                        }
                    };
                    this.materials.push(material);
                    return material;
                },
                currentMaterial: function() {
                    if (this.materials.length > 0) return this.materials[this.materials.length - 1];
                    return undefined;
                },
                _finalize: function(end) {
                    const lastMultiMaterial = this.currentMaterial();
                    if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                        lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                        lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                        lastMultiMaterial.inherited = false;
                    }
                    // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                    if (end && this.materials.length > 1) {
                        for(let mi = this.materials.length - 1; mi >= 0; mi--)if (this.materials[mi].groupCount <= 0) this.materials.splice(mi, 1);
                    }
                    // Guarantee at least one empty material, this makes the creation later more straight forward.
                    if (end && this.materials.length === 0) this.materials.push({
                        name: "",
                        smooth: this.smooth
                    });
                    return lastMultiMaterial;
                }
            };
            // Inherit previous objects material.
            // Spec tells us that a declared material must be set to all objects until a new material is declared.
            // If a usemtl declaration is encountered while this new object is being parsed, it will
            // overwrite the inherited material. Exception being that there was already face declarations
            // to the inherited material, then it will be preserved for proper MultiMaterial continuation.
            if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {
                const declared = previousMaterial.clone(0);
                declared.inherited = true;
                this.object.materials.push(declared);
            }
            this.objects.push(this.object);
        },
        finalize: function() {
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
        },
        parseVertexIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseNormalIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseUVIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },
        addVertex: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addVertexPoint: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addVertexLine: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addNormal: function(a, b, c) {
            const src = this.normals;
            const dst = this.object.geometry.normals;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addFaceNormal: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.normals;
            _vA.fromArray(src, a);
            _vB.fromArray(src, b);
            _vC.fromArray(src, c);
            _cb.subVectors(_vC, _vB);
            _ab.subVectors(_vA, _vB);
            _cb.cross(_ab);
            _cb.normalize();
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
        },
        addColor: function(a, b, c) {
            const src = this.colors;
            const dst = this.object.geometry.colors;
            if (src[a] !== undefined) dst.push(src[a + 0], src[a + 1], src[a + 2]);
            if (src[b] !== undefined) dst.push(src[b + 0], src[b + 1], src[b + 2]);
            if (src[c] !== undefined) dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addUV: function(a, b, c) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
            dst.push(src[b + 0], src[b + 1]);
            dst.push(src[c + 0], src[c + 1]);
        },
        addDefaultUV: function() {
            const dst = this.object.geometry.uvs;
            dst.push(0, 0);
            dst.push(0, 0);
            dst.push(0, 0);
        },
        addUVLine: function(a) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
        },
        addFace: function(a, b, c, ua, ub, uc, na, nb, nc) {
            const vLen = this.vertices.length;
            let ia = this.parseVertexIndex(a, vLen);
            let ib = this.parseVertexIndex(b, vLen);
            let ic = this.parseVertexIndex(c, vLen);
            this.addVertex(ia, ib, ic);
            this.addColor(ia, ib, ic);
            // normals
            if (na !== undefined && na !== "") {
                const nLen = this.normals.length;
                ia = this.parseNormalIndex(na, nLen);
                ib = this.parseNormalIndex(nb, nLen);
                ic = this.parseNormalIndex(nc, nLen);
                this.addNormal(ia, ib, ic);
            } else this.addFaceNormal(ia, ib, ic);
            // uvs
            if (ua !== undefined && ua !== "") {
                const uvLen = this.uvs.length;
                ia = this.parseUVIndex(ua, uvLen);
                ib = this.parseUVIndex(ub, uvLen);
                ic = this.parseUVIndex(uc, uvLen);
                this.addUV(ia, ib, ic);
                this.object.geometry.hasUVIndices = true;
            } else // add placeholder values (for inconsistent face definitions)
            this.addDefaultUV();
        },
        addPointGeometry: function(vertices) {
            this.object.geometry.type = "Points";
            const vLen = this.vertices.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++){
                const index = this.parseVertexIndex(vertices[vi], vLen);
                this.addVertexPoint(index);
                this.addColor(index);
            }
        },
        addLineGeometry: function(vertices, uvs) {
            this.object.geometry.type = "Line";
            const vLen = this.vertices.length;
            const uvLen = this.uvs.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++)this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
            for(let uvi = 0, l = uvs.length; uvi < l; uvi++)this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
        }
    };
    state.startObject("", false);
    return state;
}
//
class OBJLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.materials = null;
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(text));
            } catch (e) {
                if (onError) onError(e);
                else console.error(e);
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    parse(text) {
        const state = new ParserState();
        if (text.indexOf("\r\n") !== -1) // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, "\n");
        if (text.indexOf("\\\n") !== -1) // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, "");
        const lines = text.split("\n");
        let result = [];
        for(let i = 0, l = lines.length; i < l; i++){
            const line = lines[i].trimStart();
            if (line.length === 0) continue;
            const lineFirstChar = line.charAt(0);
            // @todo invoke passed in handler if any
            if (lineFirstChar === "#") continue; // skip comments
            if (lineFirstChar === "v") {
                const data = line.split(_face_vertex_data_separator_pattern);
                switch(data[0]){
                    case "v":
                        state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        if (data.length >= 7) {
                            _color.setRGB(parseFloat(data[4]), parseFloat(data[5]), parseFloat(data[6])).convertSRGBToLinear();
                            state.colors.push(_color.r, _color.g, _color.b);
                        } else // if no colors are defined, add placeholders so color and vertex indices match
                        state.colors.push(undefined, undefined, undefined);
                        break;
                    case "vn":
                        state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        break;
                    case "vt":
                        state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
                        break;
                }
            } else if (lineFirstChar === "f") {
                const lineData = line.slice(1).trim();
                const vertexData = lineData.split(_face_vertex_data_separator_pattern);
                const faceVertices = [];
                // Parse the face vertex data into an easy to work with format
                for(let j = 0, jl = vertexData.length; j < jl; j++){
                    const vertex = vertexData[j];
                    if (vertex.length > 0) {
                        const vertexParts = vertex.split("/");
                        faceVertices.push(vertexParts);
                    }
                }
                // Draw an edge between the first vertex and all subsequent vertices to form an n-gon
                const v1 = faceVertices[0];
                for(let j = 1, jl = faceVertices.length - 1; j < jl; j++){
                    const v2 = faceVertices[j];
                    const v3 = faceVertices[j + 1];
                    state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
                }
            } else if (lineFirstChar === "l") {
                const lineParts = line.substring(1).trim().split(" ");
                let lineVertices = [];
                const lineUVs = [];
                if (line.indexOf("/") === -1) lineVertices = lineParts;
                else for(let li = 0, llen = lineParts.length; li < llen; li++){
                    const parts = lineParts[li].split("/");
                    if (parts[0] !== "") lineVertices.push(parts[0]);
                    if (parts[1] !== "") lineUVs.push(parts[1]);
                }
                state.addLineGeometry(lineVertices, lineUVs);
            } else if (lineFirstChar === "p") {
                const lineData = line.slice(1).trim();
                const pointData = lineData.split(" ");
                state.addPointGeometry(pointData);
            } else if ((result = _object_pattern.exec(line)) !== null) {
                // o object_name
                // or
                // g group_name
                // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
                // let name = result[ 0 ].slice( 1 ).trim();
                const name = (" " + result[0].slice(1).trim()).slice(1);
                state.startObject(name);
            } else if (_material_use_pattern.test(line)) // material
            state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
            else if (_material_library_pattern.test(line)) // mtl file
            state.materialLibraries.push(line.substring(7).trim());
            else if (_map_use_pattern.test(line)) // the line is parsed but ignored since the loader assumes textures are defined MTL files
            // (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)
            console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
            else if (lineFirstChar === "s") {
                result = line.split(" ");
                // smooth shading
                // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                // but does not define a usemtl for each face set.
                // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                // This requires some care to not create extra material on each smooth value for "normal" obj files.
                // where explicit usemtl defines geometry groups.
                // Example asset: examples/models/obj/cerberus/Cerberus.obj
                /*
					 * http://paulbourke.net/dataformats/obj/
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */ if (result.length > 1) {
                    const value = result[1].trim().toLowerCase();
                    state.object.smooth = value !== "0" && value !== "off";
                } else // ZBrush can produce "s" lines #11707
                state.object.smooth = true;
                const material = state.object.currentMaterial();
                if (material) material.smooth = state.object.smooth;
            } else {
                // Handle null terminated files without exception
                if (line === "\x00") continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + line + '"');
            }
        }
        state.finalize();
        const container = new (0, _three.Group)();
        container.materialLibraries = [].concat(state.materialLibraries);
        const hasPrimitives = !(state.objects.length === 1 && state.objects[0].geometry.vertices.length === 0);
        if (hasPrimitives === true) for(let i = 0, l = state.objects.length; i < l; i++){
            const object = state.objects[i];
            const geometry = object.geometry;
            const materials = object.materials;
            const isLine = geometry.type === "Line";
            const isPoints = geometry.type === "Points";
            let hasVertexColors = false;
            // Skip o/g line declarations that did not follow with any faces
            if (geometry.vertices.length === 0) continue;
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(geometry.vertices, 3));
            if (geometry.normals.length > 0) buffergeometry.setAttribute("normal", new (0, _three.Float32BufferAttribute)(geometry.normals, 3));
            if (geometry.colors.length > 0) {
                hasVertexColors = true;
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(geometry.colors, 3));
            }
            if (geometry.hasUVIndices === true) buffergeometry.setAttribute("uv", new (0, _three.Float32BufferAttribute)(geometry.uvs, 2));
            // Create materials
            const createdMaterials = [];
            for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                const sourceMaterial = materials[mi];
                const materialHash = sourceMaterial.name + "_" + sourceMaterial.smooth + "_" + hasVertexColors;
                let material = state.materials[materialHash];
                if (this.materials !== null) {
                    material = this.materials.create(sourceMaterial.name);
                    // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                    if (isLine && material && !(material instanceof (0, _three.LineBasicMaterial))) {
                        const materialLine = new (0, _three.LineBasicMaterial)();
                        (0, _three.Material).prototype.copy.call(materialLine, material);
                        materialLine.color.copy(material.color);
                        material = materialLine;
                    } else if (isPoints && material && !(material instanceof (0, _three.PointsMaterial))) {
                        const materialPoints = new (0, _three.PointsMaterial)({
                            size: 10,
                            sizeAttenuation: false
                        });
                        (0, _three.Material).prototype.copy.call(materialPoints, material);
                        materialPoints.color.copy(material.color);
                        materialPoints.map = material.map;
                        material = materialPoints;
                    }
                }
                if (material === undefined) {
                    if (isLine) material = new (0, _three.LineBasicMaterial)();
                    else if (isPoints) material = new (0, _three.PointsMaterial)({
                        size: 1,
                        sizeAttenuation: false
                    });
                    else material = new (0, _three.MeshPhongMaterial)();
                    material.name = sourceMaterial.name;
                    material.flatShading = sourceMaterial.smooth ? false : true;
                    material.vertexColors = hasVertexColors;
                    state.materials[materialHash] = material;
                }
                createdMaterials.push(material);
            }
            // Create mesh
            let mesh;
            if (createdMaterials.length > 1) {
                for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                    const sourceMaterial = materials[mi];
                    buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
                }
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials);
            } else {
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials[0]);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials[0]);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials[0]);
            }
            mesh.name = object.name;
            container.add(mesh);
        }
        else // if there is only the default parser state object with no geometry data, interpret data as point cloud
        if (state.vertices.length > 0) {
            const material = new (0, _three.PointsMaterial)({
                size: 1,
                sizeAttenuation: false
            });
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(state.vertices, 3));
            if (state.colors.length > 0 && state.colors[0] !== undefined) {
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(state.colors, 3));
                material.vertexColors = true;
            }
            const points = new (0, _three.Points)(buffergeometry, material);
            container.add(points);
        }
        return container;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hUjV9","4g6pT"], "4g6pT", "parcelRequire94c2")

//# sourceMappingURL=main.5b36d4bc.js.map
