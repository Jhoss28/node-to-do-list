const colors = require('colors');
const { arvg } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer.js');

let comando = arvg._[0];
let descripcion = arvg.descripcion;

switch (comando) {

    case 'crear':
        porHacer.crear(descripcion);
        break;

    case 'listar':
        let listados = porHacer.getListado(arvg.completado);
        let linea = '===================================================='.green;
        for (let i in listados) {
            console.log(linea)
            console.log(listados[i].descripcion);
            console.log('estado:', listados[i].completado);
            console.log(linea);
        }

        break;

    case 'actualizar':
        let resultado = porHacer.actualizar(descripcion, arvg.completado);
        console.log(resultado);
        break;

    case 'eliminar':
        let eliminado = porHacer.eliminar(descripcion);
        console.log(eliminado);
        break;

    default:
        console.log('Comando no0 es reconocido');
}