descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
    completed: true
}
completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
}


const arvg = require('yargs')

.command('crear', 'Crear tereas por hacer', { descripcion })
    .command('listar', 'Lista las tareas', { completado })
    .command('actualizar', 'Actualizar las tareas', { descripcion, completado })
    .command('eliminar', 'Elimnar las tareas', descripcion)
    .help()
    .argv;

module.exports = {
    arvg
}