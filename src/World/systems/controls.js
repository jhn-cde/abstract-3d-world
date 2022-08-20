import { OrbitControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/OrbitControls.js';

import { PointerLockControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/PointerLockControls.js'

function createControls(camera, canvas) {
  const oControls = new OrbitControls(camera, canvas);
  const plControls = new PointerLockControls(camera, canvas)
  oControls.enableDamping = true

  oControls.enableDamping = true;

  // forward controls.update to our custom .tick method
  oControls.tick = () => {
    oControls.update()
  };
  console.log(oControls, plControls)

  return [ oControls, plControls];
}

export { createControls };
