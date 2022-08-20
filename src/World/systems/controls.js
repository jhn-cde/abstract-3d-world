import { OrbitControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/OrbitControls.js';

import { FirstPersonControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/FirstPersonControls.js'

function createControls(camera, canvas) {
  const oControls = new OrbitControls(camera, canvas);
  const fpControls = new FirstPersonControls(camera, canvas)
  oControls.enableDamping = true

  fpControls.enableDamping = true;

  oControls.tick = () => {
    oControls.update()
  };
  // forward controls.update to our custom .tick method
  fpControls.tick = () => {
    fpControls.update()
  };
  
  //
  fpControls.activeLook = true
  fpControls.lookSpeed = 0.4
  fpControls.movementSpeed = 20
  fpControls.lookVertical = true
  fpControls.moveForward = true

  return [oControls, fpControls];
}

export { createControls };
