import {DirectionalLight, HemisphereLight} from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    4,
  );

  const mainLight = new DirectionalLight('#99c', 4);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
