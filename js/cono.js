//props = {radius: 4, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
//creando la figura
//const micono = cono(props)
function cono({radius, height, x, y, z, color}) {
  const geometry = new THREE.ConeGeometry( radius, height, 32 );
  const material = new THREE.MeshStandardMaterial( {color: color} );
  const figura = new THREE.Mesh( geometry, material );

  figura.position.x = x
  figura.position.y = y
  figura.position.z = z
  //terreno.rotation.x = rotX;
  return figura
}