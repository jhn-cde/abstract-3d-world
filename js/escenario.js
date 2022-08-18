figuras = {}
function cargaEscenario(escenario){
  terreno = crearPlano('img/tablero.png', Math.PI/2)
  escenario.add(terreno);
  figuras = {...figuras, terreno}
  
  //
  cubo = cubo(10,10,10, getColor('morado'),10,5,10);
  escenario.add(cubo);
  //
  props = {radius: 4, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
  cono = cono(props);
  //const light = createLights();
  escenario.add(cono);
  //
  props = {radiusTop: 10, radiusBottom: 10, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
  cilindro = cilindro(props);
  escenario.add(cilindro);
  //
  esfera = esfera(10,16, 16, 0xffff00,100,50,200);
  escenario.add(esfera);
  //
  props = {radiusTop: 10, radiusBottom: 10, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
  mipiramide = piramide(props)
  escenario.add(mipiramide);

  figuras = {...figuras, terreno}

  return figuras
}

function crearPlano(filename, rotX, posX = 0, posY=0, posZ=0, rep=10, w = 400, h = 400) {
  geometriaPlano = new THREE.PlaneGeometry(w, h, 10, 10);
  texturaPlano = new THREE.TextureLoader().load(filename);
  texturaPlano.wrapS = texturaPlano.wrapT = THREE.RepeatWrapping;
  texturaPlano.repeat.set(rep, rep);

  materialPlano = new THREE.MeshBasicMaterial({ map: texturaPlano, side: THREE.DoubleSide });
  terreno = new THREE.Mesh(geometriaPlano, materialPlano);
  //terreno.rotation.y = -0.5;
  terreno.position.x = posX
  terreno.position.y = posY
  terreno.position.z = posZ
  terreno.rotation.x = rotX;
  return terreno
}
