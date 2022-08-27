import { Group } from 'three'
import { GLTFLoader } from '../../../../GLTFLoader.js'
import { figurasProps } from '../data/figurasProps.js'

function setupBarandas(data) {
  const model = data.scene.children[0];

  return model;
}

function loadModels() {
  const group = new Group()

  const loader = new GLTFLoader();

  figurasProps.barandas.map((data) => {
    loader.load("./assets/models/baranda/scene.gltf", (gltf) => {
      gltf.scene.scale.set(data.sx, data.sy, data.sz);
      gltf.scene.position.set(data.x, data.y, data.z);
      gltf.scene.rotation.set(data.rx**Math.PI / 2, data.ry*Math.PI / 2, data.rz*Math.PI/2);
      const baranda = gltf.scene
      
      group.add(baranda)
    })
  })
  
  figurasProps.armarios.map((data) => {
    loader.load("./assets/models/armario/scene.gltf", (gltf) => {
      gltf.scene.scale.set(data.sx, data.sy, data.sz);
      gltf.scene.position.set(data.x, data.y, data.z);
      gltf.scene.rotation.set(data.rx**Math.PI / 2, data.ry*Math.PI / 2, data.rz*Math.PI/2);
      const armario = gltf.scene
      
      group.add(armario)
    })
  })

  return group
}

export { loadModels }