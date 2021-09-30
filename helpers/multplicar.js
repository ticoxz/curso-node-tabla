const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {



    try {


        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        if (listar) {
            console.log('====================')
            console.log(`   Tabla del ${base}  `.underline.red)
            console.log('====================')
            console.log(salida.rainbow)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt se ha creado`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivoTabla
}