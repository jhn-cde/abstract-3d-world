figuras = {}
function cargaEscenario(escenario){
  console.log('cargaEscenario')
  terreno = crearPlano('img/piso.jpg', Math.PI/2)
  escenario.add(terreno);
  figuras = {...figuras, terreno}
  
  //
  cubo = cubo(10,10,10, 0xFF00FF,10,5,10)
  escenario.add(cubo);
  figuras = {...figuras, terreno}

  return figuras
}

function crearPlano(filename, rotX, posX = 0, posY=0, posZ=0, rep=100, w = 1000, h = 1000) {
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
