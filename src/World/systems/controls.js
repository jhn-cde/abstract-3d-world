import { OrbitControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const oControls = new OrbitControls(camera, canvas);
  oControls.enableDamping = true

  oControls.enableDamping = true;


  // forward controls.update to our custom .tick method
  oControls.tick = () => {
    oControls.update()
  };

  return oControls
}

export { createControls };
