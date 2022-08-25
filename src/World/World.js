import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { cubos, esferas, piramides, cilindros, conos } from './components/objetos/objetos.js'

import { loadModels } from './components/modelos/models.js'

import { loadPiso } from './components/objetos/piso.js'


import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { Duende } from './components/duende/Duende.js';

let camera;
let oControls;
let renderer;
let scene;
let loop;
let duende;

class World {
  constructor(container) {
    camera = createCamera(container);
    renderer = createRenderer();
    scene = createScene();
    
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    oControls = createControls(camera, renderer.domElement);

    //-- objetos
    //piso
    const piso = loadPiso()
    scene.add(piso)
    // objetos de escenario
    const cubosGroup = cubos()
    const piramidesGroup = piramides()
    const esferasGroup = esferas()
    const conosGroup = conos()
    const cilindrosGroup = cilindros()
    const modelos = loadModels()

    scene.add(cubosGroup, piramidesGroup, esferasGroup, conosGroup, cilindrosGroup, modelos);

    // luces
    const { ambientLight, mainLight } = createLights();
    
    // duende
    duende = new Duende({scene, loop, camera, oControls})

    esferasGroup.children.map(item => {
      loop.updatables.push(item)
    })

    //loop animaciones
    loop.updatables.push(oControls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    await duende.loadDuende()
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
