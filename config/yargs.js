
const { options } = require('yargs');

const argv = require('yargs')
        .option('b',{
                alias:'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla multiplicar'
        })
        .check((argv, options) => {
                /* console.log('yargs', argv); */
                if( isNaN(argv.base))  {
                        throw 'La base tiene que ser un número'
                }

                if( isNaN(argv.h))  {
                    throw 'La base tiene que ser un número'
            }
                return true
        })
        .option('l',{
                alias: 'listar',
                type:'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en consola'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default: 10,
            describe: 'Hasta donde se va a realizar la multiplicacion.'
        })
        .argv;

        module.exports=argv;