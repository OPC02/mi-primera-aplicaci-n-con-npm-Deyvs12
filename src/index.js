const logger = require("./logger");

function main(){
    logger.info('Ejecutando aplicacion en puerto 3000');
    logger.debug('Se cargo el modulo log4js');
    logger.warn('Advertencia se inicio la app en modo de pruebas');
    logger.error('No se pudo iniciar la app por que falta un archivo');
}

main();