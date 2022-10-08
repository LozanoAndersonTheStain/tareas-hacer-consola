const Tarea = require('./tarea')
const colors = require('colors')

class Tareas {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  get getListadoArra() {
    const listado = []
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    return listado
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  cargarTareasFromArra(tareas = []) {
    tareas.map((tarea) => {
      this._listado[tarea.id] = tarea
    })
  }

  listadoCompleto() {
    this.getListadoArra.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.blue : 'Pendiente'.red

      console.log(`${idx} ${desc} :: ${estado}`)
    })
  }

  ListarPendientesCompletadas(completadas = true) {
    let contador = 0
    this.getListadoArra.forEach((tarea, i) => {
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.blue : 'Pendiente'.red

      if (completadas & (estado === 'Completada'.blue)) {
        contador++
        console.log(`${(contador + '.').blue} ${desc} :: ${completadoEn}`)
      }

      if (!completadas & (estado === 'Pendiente'.red)) {
        contador++
        console.log(`${(contador + '.').red} ${desc} :: ${estado}`)
      }
    })
  }

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }
}

module.exports = Tareas
