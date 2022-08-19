import { Vector3 } from 'three'

let actions;
let keys;
let duende;
let velocidad;
let aceleracion;
let desaceleracion;

class DuendeController{
  constructor(pactions, pduende){
    actions = pactions
    duende = pduende
    velocidad = new Vector3(0, 0, 0);
    aceleracion = 0.05
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
    this.move()
  }

  keyUp(event){
    console.log('ss')
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
    this.move()
  }
  changeAnimation(action){
    if(!action.isRunning()){
      actions[0].stop()
      actions[1].stop()
      action.play()
    }
  }
  move(){
    const duendeCopy = duende.clone()

    if(keys.adelante || keys.atras){
      this.changeAnimation(actions[0])
      velocidad.z = keys.adelante?-aceleracion: aceleracion
    }else{
      this.changeAnimation(actions[1])
      velocidad.z = 0
    }
    if(keys.izquierda){}
    if(keys.derecha){}

    duende.position.add(velocidad)
  }
}

export { DuendeController }