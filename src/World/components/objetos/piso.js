import { PlaneGeometry, TextureLoader, RepeatWrapping, MeshBasicMaterial, Mesh, DoubleSide } from 'three'

function loadPiso(){
  const geometriaPlano = new PlaneGeometry(400, 400, 10, 10);
  const texturaPlano = new TextureLoader().load('./assets/img/tablero.png');
  texturaPlano.wrapS = texturaPlano.wrapT = RepeatWrapping;
  texturaPlano.repeat.set(10, 10);

  const materialPlano = new MeshBasicMaterial({ map: texturaPlano, side: DoubleSide });
  const terreno = new Mesh(geometriaPlano, materialPlano);
  
  terreno.position.set(0, 0, 0)
  terreno.rotation.x = Math.PI/2;
  
  return terreno
}

export { loadPiso }