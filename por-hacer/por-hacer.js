const fs = require('fs');
let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}

const getIndex = (descripcion) => {
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion.toString() == descripcion.toString();
    });
    return index;
}



const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, err => {
        if (err) {
            console.log('No se pudo guardar');
            return false;
        }
    });
}

const getListado = (completado) => {
    cargarDB();
    let tareas = completado !== true ? listadoPorHacer.filter(tarea => tarea.completado === completado) : listadoPorHacer;
    return tareas;
}

const crear = (descripcion) => {

    cargarDB();
    const arr = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(arr);
    guardarDB();
    return arr;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = getIndex(descripcion);

    if (index <= -1) {
        return false;
    }
    listadoPorHacer[index].descripcion = descripcion;
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
}

const eliminar = (descripcion) => {
    cargarDB();
    let index = getIndex(descripcion);
    if (index <= -1) {
        return false;
    }
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;

}



module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}