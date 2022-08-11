function esfera(radio, w, h, color,Tx,Ty,Tz) {
  //creando el material
  const geometry = new THREE.SphereGeometry( radio,w,h);
  const material = new THREE.MeshBasicMaterial( { color: color} );
  geometry.translate( Tx, Ty,Tz);
  const sphere = new THREE.Mesh( geometry, material );
  return sphere
  //quista pasando aqui!!
}