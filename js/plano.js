//variables globales
var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();

var ancho = window.innerWidth - 15;
var alto = window.innerHeight - 10;
var angulo = 45;
var aspecto = ancho / alto;
var cerca = 0.1;
var lejos = 10000;
var camara = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);

var figura;
var cubo;
var ejes;
var controles;  //manejo de camara con mouse

//funciones
function inicio() {
    lienzo.setSize(ancho, alto);
    document.body.appendChild(lienzo.domElement);

    camara.position.z = 100;
    escenario.add(camara);

    cargaEjes();
    crearPiso();
    cargaModelo();
    cargaCubo();

    controles = new THREE.OrbitControls(camara, lienzo.domElement);
}

function cargaModelo() {
    //creando la figura
    figura = esfera(10,16, 16, 0xffff00,100,50,200)
    escenario.add(figura);
    
}
function cargaCubo() {
    //creando la figura
    cubo = cubo(10,10,10, 0xFF00FF,100,5,100)
    escenario.add(cubo);
}

function cargaEjes() {
    //creando el material
    const material = new THREE.LineBasicMaterial({ color: 0xffff00 });

    //creando coordenadas x, y, z
    const puntos = [];
    puntos.push(new THREE.Vector3(5, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 5, 0));
    puntos.push(new THREE.Vector3(0, 0, 0));
    puntos.push(new THREE.Vector3(0, 0, 5));

    //creando geometria
    const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

    //creando ejes de coordenadas
    ejes = new THREE.Line(geometria, material);
    escenario.add(ejes);
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
    escenario.add(terreno);
}
function crearPiso(){
  crearPlano('img/piso.jpg', Math.PI/2)
}

function animacion() {
    requestAnimationFrame(animacion);
    controles.update();
    renderModelo();
}

function renderModelo() {
    figura.rotation.y += 0.01;
    lienzo.render(escenario, camara);
}


///llamando proceso principal
inicio();
animacion();