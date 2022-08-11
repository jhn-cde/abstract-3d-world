function cubo(w, h, d, color,Tx,Ty,Tz) {
    //creando el material
    const geometry = new THREE.BoxGeometry(w, h, d);
    const material = new THREE.MeshBasicMaterial( { color: color} );
    const cubo = new THREE.Mesh(geometry, material);
    //cubo.scale.set( 10, 100, 100);
    geometry.translate( Tx, Ty, Tz);
    return cubo
    //quista pasando aqui!!
}