 let getNombres=(id,callback)=>{



 	 const usuario={
 	 	nombre:'Javier ',
 	 	id
 	 }

 	if (id===20) {
 		callback(`Usuario de  con id ${id} no existe en  La BD`);

 	} else {

        callback(null, usuario);
 	}


 }

 getNombres(1,(error,usuario)=>{
 	if (error) {
 		return console.log(error)
 	}

 	console.log(`Usuario de Base de datos `,usuario);

 })