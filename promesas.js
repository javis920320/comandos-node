let empleados=[
{
	id:1,
	nombre:'Javier '
},
{
	id:2,
	nombre:'Martin'

},
{
	id:3,
	nombre:'Lorena'
}

];

let salarios=[
{
	id:1,
	valor:2000

},{
	id:2,
	valor:4000
}
];


let  getEmpleado=(id)=>{
	return new Promise((resolve,reject)=>{

	let EmpleadoDB=empleados.find(empleado=>empleado.id===id);
	if (!EmpleadoDB) {

		reject(`Usuario con Id ${id} No existe`);
	} else {

		resolve(EmpleadoDB);
	}


	});

}


 let getSalario=(empleado)=>{
 	return new Promise((resolve,reject)=>{

 		let SalarioDB=salarios.find(salario=>salario.id===empleado.id);


 		if(!SalarioDB){
 				reject(`No hay salario para el Empleado ${empleado.nombre}`);
 		}else{
 				resolve({
 					nombre:empleado.nombre,
 					salario:SalarioDB
 				})
 		}

 	});
 }


getEmpleado(1).then(empleado=>{

//console.log(empleado);
		getSalario(empleado)
		.then(resp=>{
		console.log(resp);
			},
		error=>console.log(error));



},error=>{
	console.log(error);
})