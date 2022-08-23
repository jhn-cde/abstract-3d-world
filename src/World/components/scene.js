import { Color, Scene,Fog, FogExp2 } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');
  scene.fog= new FogExp2(0xB5D1EF, 0.0025);
  return scene;
}

export { createScene };
