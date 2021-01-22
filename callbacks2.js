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


let  getEmpleado=(id,callback)=>{

	let EmpleadoDB=empleados.find(empleado=>empleado.id===id);
	if (!EmpleadoDB) {

		callback(`Usuario con Id ${id} No existe`);
	} else {

		callback(null,EmpleadoDB);
	}


}

 let getSalario=(empleado,callback)=>{

 	let SalarioDB=salarios.find(salario=>salario.id===empleado.id);

 	if(!SalarioDB){

 		callback(`No se encontro Salario para el empleado ${empleado.nombre}`);

 	}else{
 		callback(null,{
 			nombre:empleado.nombre,
 			salario:SalarioDB.valor,
 			id:empleado.id
 		});

 	}
 }





getEmpleado(1,(error,empleado)=>{
 if (error) {

 return console.log(error);
 }
 getSalario(empleado,(error,resp)=>{
 	if(error){
 		return console.log(error);
 	}
 	 console.log(`Empleado ${resp.id} ${resp.nombre} salario $ ${resp.salario}`);
 })



});