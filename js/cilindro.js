//props = {radiusTop: 10, radiusBottom: 10, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
//creando la figura
//const micilindro = cilindro(props)
function cilindro({radiusTop, radiusBottom, height, x, y, z, color}) {
  const geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, 256 );
  const material = new THREE.MeshStandardMaterial({ color: color });
  const figura = new THREE.Mesh( geometry, material );

  figura.position.x = x
  figura.position.y = y
  figura.position.z = z
  //terreno.rotation.x = rotX;
  return figura
}