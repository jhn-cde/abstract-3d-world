const figurasProps = {
  esferas: [
    {
      radio:10,
      x: 100, y: 50, z: 200, 
      color: 'blue'
    },
    {
      radio:10, 
      x: -100, y: 50, z: 200, 
      color: 'blue'
    },
    {
      radio:10, 
      x: 100, y: 50, z: -50, 
      color: 'blue'
    },
    {
      radio:10, 
      x: 100, y: 50, z: -100,  
      color: 'blue'
    }
  ],
  piramides: [
    { 
      lenBottom: 50, 
      height: 50, 
      x: 150, y: 25.1, z: -150, 
      color: 'red'
    },
    {
      lenBottom: 50, 
      height: 50, 
      x: -150, y: 25.1, z: -150, 
      color: 'red'
    },
    {
      lenBottom: 50, 
      height: 50, 
      x: 150, y: 25.1, z: 150, 
      color: 'red'
    },
    {
      lenBottom: 50, 
      height: 50, 
      x: -150, y: 25.1, z: 150, 
      color: 'red'
    }
  ],
  cubos: [
    {
      w: 16, h: 16, d: 16, 
      x: 100, y: 50, z: 200, 
      color: 'green'
    },
    {
      w: 16, h: 16, d: 16, 
      x: -100, y: 50, z: 200, 
      color: 'green'
    },
    {
      w: 16, h: 16, d: 16, 
      x: 100, y: 50, z: -50, 
      color: 'green'
    },
    {
      w: 16, h: 16, d: 16, 
      x: 100, y: 50, z: -100,  
      color: 'green'
    }
  ],
  conos:[
    {
      radio: 10, altura: 10,
      x: 20, y: 10.01, z: 0,
      color: '#005200'
    }
  ],
  cilindros:[
    {
      ratioTop: 10, radioBottom: 10, altura: 20,
      x: 4, y: 2, z: 0,
      color: '#005200'

    }
  ],
  barandas:[
    {
      sx: -65, sy: 40, sz: 100,
      x: 200, y: -20, z: 200,
      rx: 0, ry: 0, rz: 0
    },
    {
      sx: -30, sy: 40, sz: 80,
      x: 80, y: -20, z: 80,
      rx: 0, ry: 0, rz: 0
    },
    {
      sx: -35, sy: 40, sz: 110,
      x: -200, y: -20, z: -40,
      rx: 0, ry: 90, rz: 0
    },
  ],
  armarios:[
    {
      sx: -30, sy: 40, sz: 80,
      x: 100, y: -5, z: -130,
      rx: 0, ry: 0, rz: 0
    },
  ]
}

export { figurasProps }