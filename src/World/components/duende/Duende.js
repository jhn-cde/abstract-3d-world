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

class Duende{
  constructor(pparams){
    params = pparams
  }

  getDuende(){
    return duende
  }
  async loadDuende() {
    const loader = new GLTFLoader();
    duendeData = await loader.loadAsync('./assets/models/zombie/scene.gltf')
    
    clips = duendeData.animations
    duende = duendeData.scene.children[0];
    mixer = new AnimationMixer(duende)

    this.setupModel();

    controlador = new DuendeController(actions, duende, params)
    controlador.initListener()
  }

  setupModel() {
    let action0 = mixer.clipAction(clips[3])//correr
    let action1 = mixer.clipAction(clips[0])//detenerse
    let action2 = mixer.clipAction(clips[1])//girar
    action1.play()
    actions = [action0, action1, action2]
    duende.tick = (delta) => {
      mixer.update(delta)
      controlador.move(delta)
    };
  
    duende.position.set(120, 0, 0);
    duende.scale.multiplyScalar(30);
    duende.rotateZ(0*Math.PI/180)
    
    params.loop.updatables.push(duende)
    duende.add(params.camera)
    params.scene.add(duende);
    
  }
}

export {Duende}