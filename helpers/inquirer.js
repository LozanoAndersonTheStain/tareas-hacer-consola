const inquirer = require('inquirer')
const colors = require('colors')

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que deseas hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.grey} Crear tarea`,
      },
      {
        value: 2,
        name: `${'2.'.grey} Listar tareas`,
      },
      {
        value: 3,
        name: `${'3.'.grey} Listar tareas completadas`,
      },
      {
        value: 4,
        name: `${'4.'.grey} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${'5.'.grey} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${'6.'.grey} Borrar tareas`,
      },
      {
        value: 7,
        name: `${'7.'.grey} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()

  console.log('===================='.blue)
  console.log('Seleccione una opción'.cyan)
  console.log('===================='.blue)

  const { opcion } = await inquirer.prompt(preguntas)
  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.blue} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

module.exports = {
  inquirerMenu,
  pausa,
}
