import { BoxGeometry, ConeGeometry, CylinderGeometry, MeshStandardMaterial, Mesh, Group, SphereGeometry, TextureLoader } from 'three'
import { figurasProps } from '../data/figurasProps.js' 

function cilindros(){
  const group = new Group();
  const loader = new TextureLoader();
  figurasProps.cilindros.map((data) => {
    const geometry = new CylinderGeometry(data.ratioTop, data.radioBottom, data.altura, 32);
    const material = new MeshStandardMaterial( { color: data.color,map: loader.load("./assets/img/barrril.jpg")} );
    
    const cilindro = new Mesh(geometry, material);
    cilindro.position.set(data.x, data.y, data.z)
    cilindro.rotation.set(data.rx**Math.PI / 2, data.ry*Math.PI / 2, data.rz*Math.PI/2);
    group.add(cilindro)
  })

  return group
}

function conos(){
  const group = new Group();
  const loader = new TextureLoader();

  figurasProps.conos.map((data) => {
    const geometry = new ConeGeometry(data.radio, data.altura, 16);
    const material = new MeshStandardMaterial( { color: data.color,map: loader.load("./assets/img/cuerd.jpg")} );
    
    const cono = new Mesh(geometry, material);
    cono.position.set(data.x, data.y, data.z)
    cono.rotation.set(data.rx**Math.PI / 2, data.ry*Math.PI / 2, data.rz*Math.PI/2);
    
    group.add(cono)
  })

  return group
}

function cubos(){
  const group = new Group();

  figurasProps.cubos.map((data) => {
    const loader = new TextureLoader();
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial( { color: data.color,map: loader.load("./assets/img/caja.jpg")} );
    const cubo = new Mesh(geometry, material);
  
    cubo.scale.set(data.w, data.h, data.d)
    cubo.position.set(data.x, data.y, data.z)
    cubo.material.color.set(data.color)
    group.add(cubo)
  })

  return group
}

function esferas(){
  const group = new Group();

  figurasProps.esferas.map((data) => {
    const loader = new TextureLoader();
    const geometry = new SphereGeometry(data.radio, 16, 16);
    const material = new MeshStandardMaterial( { color: data.color,map: loader.load(data.img)} );

    const esfera = new Mesh(geometry, material);
    esfera.position.set(data.x, data.y, data.z);

    let radiansPerSecond = data.giro*Math.PI/180;

    esfera.tick = (delta) => {
      esfera.rotation.y -= delta * radiansPerSecond;
    };
    
    group.add(esfera)
  })

  return group
}

function piramides(){
  const group = new Group();

  figurasProps.piramides.map((data) => {
    const loader = new TextureLoader();

    const geometry = new CylinderGeometry(0, data.lenBottom, data.height, 4);
    const material = new MeshStandardMaterial( { color: data.color, map: loader.load("./assets/img/craneos.jpg")} );
    const piramide = new Mesh(geometry, material);
    piramide.position.set(data.x, data.y, data.z)
    
    group.add(piramide)
  })

  return group
}

export { cilindros, conos, cubos, esferas, piramides }