'use strict'

const Schema = use('Schema')

class LettersTableSchema extends Schema {

  up () {
    this.create('letters', (table) => {
      table.increments()
      table.string('contract')
      table.string('letterName')
      table.text('letterComments')
      table.string('letterLocation')
      table.string('letterPriority')
      table.string('letterStatus')
      table.timestamps()
    })
  }

  down () {
    this.drop('letters')
  }

}

module.exports = LettersTableSchema
