let opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
.command('listar', 'Imprime en consola  La  tabla de multiplicar', opt)
.command('crear', 'Imprime en consola  La  tabla de multiplicar', opt).argv;

module.exports={
	argv
}