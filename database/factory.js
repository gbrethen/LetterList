'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/Letter', (fake) => {
  return {
    contract: 'HighMark Commercial',
    letterName: 'Does Not Meet Medical Necessity',
    letterComments: fake.paragraph(),
    letterLocation: 'DevPacific',
    letterPriority: 'High',  
    letterStatus: 'BackLog'
  }
})
