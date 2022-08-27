import { Vector3, Quaternion, FogExp2 } from 'three'
import { colision } from './../data/limitesColision.js'

let actions;
let keys;
let duende;
let velocidad;
let aceleracion;
let rotacion;
let enMovimiento, rotando;
let params;
let accz, accx;

class DuendeController{
  constructor(pactions, pduende, pparams){
    actions = pactions
    duende = pduende
    velocidad = new Vector3(0, 0, 0);
    rotacion = 0;
    aceleracion = new Vector3(1, 2, 1)
    accz = 1
    accx = 0
    params = pparams
    enMovimiento = false
    rotando = false
  }

  initListener(){
    keys = {
      adelante: false,
      atras: false,
      izquierda: false,
      derecha: false,
    }
    document.addEventListener('keydown', (e) => this.keyDown(e), false)
    document.addEventListener('keyup', (e) => this.keyUp(e), false)
  }

  keyDown(event){
    switch (event.keyCode) {
      case 87: //w
        keys.adelante = true
        break;
      case 83: //s
        keys.atras = true
        break;
      case 65: //a
        keys.izquierda = true
        break;
      case 68: //d
        keys.derecha = true
        break;
      default:
        break;
    }
  }

  keyUp(event){
    switch (event.keyCode) {
      case 87: //w
        keys.adelante = false
        break;
      case 83: //s
        keys.atras = false
        break;
      case 65: //a
        keys.izquierda = false
        break;
      case 68: //d
        keys.derecha = false
        break;
      default:
        break;
    }
  }
  changeAnimation(action){
    if(!actions[action].isRunning()){
      actions[action].play()
      actions.map((act, i) =>{
        if(act.isRunning() && i != action) act.stop()  
      })
    }
  }
  move(delta){
    let rot = 0
    const vec = velocidad.clone()
    const controlObject = duende;

    const acc = aceleracion.clone();

    if(keys.adelante || keys.atras){
      vec.z = acc.z*(keys.adelante ? accz : -accz) 
      vec.x = acc.z*(keys.adelante ? -accx : accx)
      enMovimiento = true
    }
    else{
      enMovimiento = false
    }
    if(keys.izquierda || keys.derecha){
      rot = keys.izquierda? acc.y : -acc.y
      rotacion += rot
      rotacion = Math.abs(rotacion)<360? rotacion: 0

      const tmpRot = Math.abs(rotacion) 
      accz = Math.round((1 - (tmpRot%180)/90)*(tmpRot<180?1:-1)*1000)/1000
      accx = Math.round((1 - Math.abs(accz))*1000)/1000
      accx = rotacion<0 && tmpRot<180?accx:-accx
      accx = rotacion<180?accx:-accx
      rotando = true
    }else{
      rotando = false
    }
    
    if(enMovimiento){
      this.changeAnimation(0)
    }else{
      if(rotando){
        this.changeAnimation(2)
      }else{
        this.changeAnimation(1)
      }
    }

    const forward = new Vector3(0, 0, 1);
    forward.normalize();

    const sideways = new Vector3(1, 0, 0);
    sideways.normalize();

    sideways.multiplyScalar(vec.x);
    forward.multiplyScalar(vec.z);

    let mov_forward = true
    let mov_side = true
    //movimiento
    //adelante/atras(z) ----------------------------------------------
    //extremos
    if(controlObject.position.z >= colision.limites.z && vec.z > 0)
      mov_forward = false
    if(controlObject.position.z <= -colision.limites.z && vec.z <= 0)
      mov_forward = false


    //izquierda/deracha(x) ----------------------------------------------
    if(controlObject.position.x >= colision.limites.x && vec.x > 0)
      mov_side = false
    if(controlObject.position.x <= -colision.limites.x && vec.x <= 0)
      mov_side = false
    
    //objetos
    for(let i = 0; i < colision.objetos.length; i++){
      const obx = colision.objetos[i].x
      const obz = colision.objetos[i].z
      const poszIni = controlObject.position.z
      const posxIni = controlObject.position.x
      //forma esfera
      if(colision.objetos[i].r != undefined){
        const radioIni = Math.sqrt(Math.pow(posxIni - obx, 2)+Math.pow(poszIni - obz, 2))
        const radioFinz = Math.sqrt(Math.pow(posxIni - obx, 2)+Math.pow(poszIni+vec.z - obz, 2))
        const radioFinx = Math.sqrt(Math.pow(posxIni+vec.x - obx, 2)+Math.pow(poszIni - obz, 2))
      
        if (radioFinz < radioIni && radioFinz < colision.objetos[i].r)
          mov_forward = false
        if (radioFinx < radioIni && radioFinx < colision.objetos[i].r)
          mov_side = false
      }
      //forma paralelepipedo
      else{
        const distxIni = Math.abs(posxIni-obx)
        const distzIni = Math.abs(poszIni-obz)
        const distxFin = Math.abs(posxIni+vec.x-obx)
        const distzFin = Math.abs(poszIni+vec.z-obz)

        if(distxFin < colision.objetos[i].lx && distzFin < colision.objetos[i].lz){
          if (distzFin < distzIni && distxIni < colision.objetos[i].lx)
          {
            mov_forward = false
          }
          if (distxFin < distxIni && distzIni < colision.objetos[i].lz){
            mov_side = false
          }


        }
      }
        
      if(!mov_side && !mov_forward)
        break
    }

    //movimiento
    if(mov_forward)
      controlObject.position.add(forward);
    if(mov_side)
      controlObject.position.add(sideways);
    //rotacion
    controlObject.rotateZ(rot*Math.PI/180);



    // actualizar position de camara
    const tmp = duende.position.clone()
    tmp.y += 50
    params.oControls.target.copy(tmp);
    
  }
}

export { DuendeController }