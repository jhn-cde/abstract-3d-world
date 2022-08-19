figuras = {}

function cargaEscenario(escenario){
  terreno = crearPlano('img/tablero.png', Math.PI/2)
  escenario.add(terreno);
  figuras = {...figuras, terreno}
  
  //



  figurasProps.piramides.map((piramideData) => {
    mipiramide = piramide(piramideData);
    escenario.add(mipiramide);
    figuras = {...figuras, mipiramide}
  })
  figurasProps.esferas.map((esferasData) => {
    esfera = Esfera(esferasData);
    escenario.add(esfera);
    figuras = {...figuras, esfera}
  })
  figurasProps.cubos.map((cubosData) => {
    cubo= Cubo(cubosData);
    escenario.add(cubo);
    figuras = {...figuras, cubo}
  })
  //
  props = {radius: 4, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
  cono = cono(props);
  //const light = createLights();
  escenario.add(cono);
  //
  props = {radiusTop: 10, radiusBottom: 10, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
  cilindro = cilindro(props);
  escenario.add(cilindro);


  const light = new THREE.AmbientLight( 0xffffff );
  escenario.add( light )
  const loader = new THREE.GLTFLoader()
  var baranda;
  loader.load("js/reja/scene.gltf", (gltf) => {
    
    
    gltf.scene.scale.set(-65, 40, 100);
    gltf.scene.position.set(200, -15, 200);
    baranda=gltf.scene
    escenario.add( gltf.scene );
    figuras = {...figuras, baranda}
    
  })
  loader.load("js/reja/scene.gltf", (gltf) => {
    
    
    gltf.scene.scale.set(-30, 40, 80);
    gltf.scene.position.set(80, -15, 80);
    baranda=gltf.scene
    escenario.add( gltf.scene );
    figuras = {...figuras, baranda}
    
  })
  loader.load("js/reja/scene.gltf", (gltf) => {
    
    
    gltf.scene.scale.set(-35, 40, 110);
    gltf.scene.position.set(-200, -15, -40);
    gltf.scene.rotation.set(0,90*Math.PI / 2,0);
    baranda=gltf.scene
    escenario.add( gltf.scene );
    figuras = {...figuras, baranda}
    
  })
  loader.load("js/armario/scene.gltf", (gltf) => {
    
    
    gltf.scene.scale.set(-30, 40, 80);
    gltf.scene.position.set(100, -15, -130);
    armario=gltf.scene
    escenario.add( armario );
    figuras = {...figuras, armario}
    
  })


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
