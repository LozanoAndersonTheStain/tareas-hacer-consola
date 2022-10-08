const colors = require('colors')
const Tareas = require('./models/tareas')
const { guardarDB, leerDB } = require('./helpers/guardarLeerArchivo')
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
} = require('./helpers/inquirer')

const main = async () => {
  let opt = ''
  const tareas = new Tareas()

  const tareasDB = leerDB()
  if (tareasDB) {
    tareas.cargarTareasFromArra(tareasDB)
  }

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        const desc = await leerInput('Descripcion:')
        tareas.crearTarea(desc)
        break
      case 2:
        tareas.listadoCompleto()
        break
      case 3:
        tareas.ListarPendientesCompletadas(true)
        break
      case 4:
        tareas.ListarPendientesCompletadas(false)
        break
      case 6:
        const id = await listadoTareasBorrar(tareas.getListadoArra)
        //Hacer confirmación para borrar
        console.log({ id })
        break
    }

    guardarDB(tareas.getListadoArra)
    if (opt !== '0') await pausa()
  } while (opt !== '0')
}

main()
