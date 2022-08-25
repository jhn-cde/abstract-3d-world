import { Color, Scene,Fog, FogExp2,TextureLoader } from 'three';

function createScene() {
  const scene = new Scene();
  const loader = new TextureLoader();
  //scene.background = new Color('skyblue');
  loader.load("./assets/img/ambiente.jpg",function(texture){
    scene.background=texture;
  })
  scene.fog= new FogExp2(0xB5D1EF, 0.0028);
  return scene;
}

export { createScene };
