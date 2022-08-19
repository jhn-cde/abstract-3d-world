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
function Cubo({w, h, d,x,y,z, color}) {
    //creando el material
    const geometry = new THREE.BoxGeometry(w, h, d);
    const material = new THREE.MeshBasicMaterial( { color: color} );
    const cubo = new THREE.Mesh(geometry, material);
    //cubo.scale.set( 10, 100, 100);
    //geometry.translate( Tx, Ty, Tz);
    cubo.position.x = x
    cubo.position.y = y
    cubo.position.z = z
    return cubo
    //quista pasando aqui!!
}
function Esfera({radio, lenBottom, height,x,y,z,color}) {
    //creando el material
    const geometry = new THREE.SphereGeometry( radio,lenBottom, height);
    const material = new THREE.MeshBasicMaterial( { color: color} );
    //geometry.translate( Tx, Ty,Tz);
    const sphere = new THREE.Mesh( geometry, material );
    sphere.position.x = x
    sphere.position.y = y
    sphere.position.z = z
    return sphere
    //quista pasando aqui!!
}
//props = {radiusTop: 10, radiusBottom: 10, height: 4, x: 20, y: 2.01, z: 0, color: "#005200"}
//creando la figura
//const micilindro = cilindro(props)
function piramide({lenBottom, height, x, y, z, color}) {
    const geometry = new THREE.CylinderGeometry( 0, lenBottom, height, 4 );
    const material = new THREE.MeshStandardMaterial({ color: color });
    const figura = new THREE.Mesh( geometry, material );
  
    figura.position.x = x
    figura.position.y = y
    figura.position.z = z
    //terreno.rotation.x = rotX;
    return figura
}