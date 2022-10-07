const colors = require('colors')
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
const { guardarDB, leerDB } = require('./helpers/guardarLeerArchivo')

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
        console.log(tareas.getListadoArra)
        break
    }

    guardarDB(tareas.getListadoArra)
    if (opt !== '0') await pausa()
  } while (opt !== '0')
}

main()
