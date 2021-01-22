const {crearTabla,listarTabla} = require('./multiplicar/multiplicar');
const argv=require('./config/yargs').argv;


switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearTabla(argv.base,argv.limite).then(tabla => {
            console.log(tabla);
        }).catch(error => {
            console.log(error);
        })
        break;
    default:
        console.log('comando no reconocido');
}
/**/