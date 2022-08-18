//
var Dic=[{
    id: 'amarillo',
    valor: '#ffff00'
    }, {
    id: 'rojo',
    valor: '#FF0000'
    }, {
    id: 'fucsia',
    valor: '#ff00ff'
    }, {
    id: 'azul',
    valor: '#0000ff'
    }, {
    id: 'verde',
    valor: '#008000'
    }, {
    id: 'granate',
    valor: '#800000'
    }, {
    id: 'negro',
    valor: '#000000'
    }, {
    id: 'blanco',
    valor: '#ffffff'
    }, {
    id: 'anarajado',
    valor: '#ffa500'
    }, {
    id: 'marron',
    valor: '#a52a2a'
    }, {
    id: 'violeta',
    valor: '#ee82ee'
    }, {
    id: 'agua',
    valor: '#00ffff'
    }, {
    id: 'lima',
    valor: '#00ff00'
    }, {
    id: 'morado',
    valor: '#800080'

}];
function getColor(color){
    for (let index = 0; index <= Dic.length; index++) {
        if (Dic[index].id === color) {
            return Dic[index].valor;
        }
    }
    var color_random = '#'+Math.floor(Math.random()*16777215).toString(16);
    return color_random;
}