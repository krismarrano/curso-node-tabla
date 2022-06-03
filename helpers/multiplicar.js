
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const colors = require('colors');

const crearArchivo = async( base = 5, listar=false, hasta ) =>{
    try{
        
    
        let salida='';
        let consola='';
        for (let i=1;i<=hasta;i++){
                salida +=`${(base)} X ${i} = ${base*i}\n`;
                consola +=`${(colors.red(base))} ${'X'.green} ${colors.yellow(i)} ${'='.blue} ${colors.magenta(base*i)}\n`;
        }
        
        if(listar==true){
            console.log('======================'.green);
            console.log('    Tabla del:'.yellow, colors.blue(base) );
            console.log('======================'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
               
        
        return `tabla-${base}.txt creado`;
    }catch (err){
        throw err;
    }

    

}

module.exports= {
    crearArchivo

}