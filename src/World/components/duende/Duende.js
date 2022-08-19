import { GLTFLoader } from '../../../../GLTFLoader.js'
import { AnimationMixer } from 'three';
import { DuendeController } from './DuendeController.js'

let duende;
let controlador;
let clips;
let params;
let duendeData;
let mixer;
let actions;
let velocidad;

class Duende{
  constructor(pparams){
    params = pparams
  }

  async loadDuende() {
    const loader = new GLTFLoader();
    duendeData = await loader.loadAsync('./assets/models/Duende.gltf')
    clips = duendeData.animations
    duende = duendeData.scene.children[0];
    mixer = new AnimationMixer(duende)

    this.setupModel();
    
    controlador = new DuendeController(actions, duende)
    controlador.initListener()
  }

  setupModel() {
    console.log('Heey! tamo de vuelta', duende)
    let action0 = mixer.clipAction(clips[0])
    let action1 = mixer.clipAction(clips[1])
    action1.play()
    actions = [action0, action1]
  
    duende.tick = (delta) => mixer.update(delta); 
  
    duende.position.set(120, 0, 0.5);
    duende.rotation.y = -10*(Math.PI/180)
    duende.scale.multiplyScalar(60);
  
    // move the target to the center of the front bird
    params.controls.target.copy(duende.position);

    params.loop.updatables.push(duende)
    params.scene.add(duende);
    
  }
}

export {Duende}