const figurasProps = {
  esferas: [
    {
      radio:5,
      x: 80, y: 67, z: 80, 
      color: 'white'
    },
    {
      radio:5, 
      x: -180, y: 67, z: 200, 
      color: 'white'
    },
    {
      radio:5, 
      x: -200, y: 67, z: -50, 
      color: 'white'
    },
    {
      radio:5, 
      x: 5, y: 67, z: -200,  
      color: 'red'
    }
  ],
  piramides: [
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
    }
  ],
  cubos: [
    {
      w: 30, h: 30, d: 30, 
      x: 100, y: 46, z: -50,  
      color: 'white'
    },
    {
      w: 30, h: 30, d: 30, 
      x: 100, y: 15, z: -34, 
      color: 'white'
    },
    {
      w: 30, h: 30, d: 30, 
      x: 100, y: 15, z: -68,  
      color: 'white'
    },
    {
      w: 20, h: 20, d: 20, 
      x: -180, y: 10, z: -10, 
      color: 'white'
    }
  ],
  conos:[
    {
      radio: 5, altura: 5,
      x: 80, y: 60, z: 80,
      rx: 0, ry: 0, rz: 90,
      color: 'white'
    },
    {
      radio: 5, altura: 5,
      x: -180, y: 60, z: 200,
      rx: 0, ry: 0, rz: 90,
      color: 'white'
    },
    {
      radio: 5, altura: 5,
      x: -200, y: 60, z: -50,
      rx: 0, ry: 0, rz: 90,
      color: 'white'
    },
    {
      radio: 5, altura: 5,
      x: 5, y: 60, z: -200,
      rx: 0, ry: 0, rz: 90,
      color: 'white'
    }
  ],
  cilindros:[
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 4, y: 18, z: 0,
      rx: 0, ry: 0, rz: 0,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 28, y: 18, z: -190,
      rx: 0, ry: 45, rz: 45,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 59, y: 18, z: -190,
      rx: 0, ry: 45, rz: 45,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 88, y: 18, z: -200,
      rx: 0, ry: 45, rz: 45,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 74, y: 44, z: -200,
      rx: 0, ry: 45, rz: 45,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 44, y: 44, z: -190,
      rx: 0, ry: 45, rz: 45,
      color: 'white'

    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: 59, y: 70, z: -195,
      rx: 0, ry: 45, rz: 45,
      color: 'white'
    },
    {
      ratioTop: 15, radioBottom: 15, altura: 30,
      x: -150, y: 15.1, z: 150, 
      rx: 0, ry: 0, rz: 0,
      color: 'white'
    }
  ],
  barandas:[
    {
      sx: -65, sy: 50, sz: 100,
      x: 200, y: -24.8, z: 200,
      rx: 0, ry: 0, rz: 0
    },
    {
      sx: -30, sy: 50, sz: 80,
      x: 80, y: -24.8, z: 80,
      rx: 0, ry: 0, rz: 0
    },
    {
      sx: -35, sy: 50, sz: 110,
      x: -200, y: -24.8, z: -40,
      rx: 0, ry: 90, rz: 0
    },
    {
      sx: -35, sy: 50, sz: 110,
      x: -200, y: -24.8, z: -200,
      rx: 0, ry: 90, rz: 0
    },
    {
      sx: -15, sy: 50, sz: 44,
      x: 200, y: -24.8, z: -200,
      rx: 0, ry: 45, rz: 0
    },
  ],
  armarios:[
    {
      sx: 80, sy: 40, sz: 50,
      x: 182, y: -5, z: -65,
      rx: 0, ry: -45, rz: 0
    },
  ]
}

export { figurasProps }