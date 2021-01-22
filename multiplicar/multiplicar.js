
 const fs= require('fs');



  let listarTabla=(base,limite)=>{



  	let datos='';
  	  for (var i = 0; i<=limite; i++) {
  	  datos+=`${base}*${i}=${base*i}\n`;
  	  }
  	   console.log(datos);
  }

 let crearTabla=(base,limite)=>{

 	return new Promise((resolve,reject)=>{

 		if (!Number(base)) {
 			reject(` El valor  ingresado ${base} no es un numero`);
 		}


 	let data='';

	for ( let i =0;i<=limite;i++){

	    data+=`${base}x${i}=${base*i}\n`;
	  }

	  fs.writeFile(`${base}.txt`,data,(err)=>{
	  	if (err) reject(err)
	  	else
	  	resolve(` tabla ${base}.txt`)
	  });


 	})
 }
module.exports={
	crearTabla,
	listarTabla
}



