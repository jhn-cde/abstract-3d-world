import { Color, Scene,Fog, FogExp2,TextureLoader } from 'three';

function createScene() {
  const scene = new Scene();
  const loader = new TextureLoader();
  //scene.background = new Color('skyblue');
  loader.load("./assets/img/ambiente.jpg",function(texture){
    scene.background=texture;
  })
  scene.fog = new FogExp2('#999', 0.003);
  return scene;
}

export { createScene };
