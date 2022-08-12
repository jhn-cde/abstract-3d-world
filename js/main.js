var lienzo = new THREE.WebGLRenderer();
var escenario = new THREE.Scene();
var ancho = window.innerWidth - 15;
var alto = window.innerHeight - 10;
var angulo = 45;
var aspecto = ancho / alto;
var cerca = 0.1;
var lejos = 10000;
var camara = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);

function inicio() {
  lienzo.setSize(ancho, alto);
  document.body.appendChild(lienzo.domElement);

  camara.position.z = 100;
  //escenario.add(camara)

  //figuras = cargaEscenario(escenario);

  controles = new THREE.OrbitControls(camara, lienzo.domElement);
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

function animacion() {
  requestAnimationFrame(animacion);
  controles.update();
  renderModelo();
}

function renderModelo() {
  //figura.rotation.y += 0.01;
  lienzo.render(escenario, camara);
}