import { PerspectiveCamera } from 'three';

var ancho = window.innerWidths;
var alto = window.innerHeight;

var angulo = 70;
var aspecto = ancho / alto;
var cerca = 0.1;
var lejos = 10000;

function createCamera() {
  const camera = new PerspectiveCamera(angulo, aspecto, cerca, lejos);

  camera.position.set(0, 100, 100);

  return camera;
}

export { createCamera };
