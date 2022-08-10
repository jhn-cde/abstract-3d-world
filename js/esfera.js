function esfera(radio, x, y, z) {
  //creando el material
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

  //creando coordenadas de varios puntos
  const puntos = [];
  puntos.push(new THREE.Vector3(2, 7, 0));
  puntos.push(new THREE.Vector3(7, 2, 0));
  puntos.push(new THREE.Vector3(12, 7, 0));
  //creando geometria
  const geometria = new THREE.BufferGeometry().setFromPoints(puntos);

  //creando la figura
  figura = new THREE.Line(geometria, material);
  return figura
  //quista pasando aqui!!
}