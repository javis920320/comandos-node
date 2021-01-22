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


let  getEmpleado=async(id)=>{
	//return new Promise((resolve,reject)=>{

	let EmpleadoDB=empleados.find(empleado=>empleado.id===id);
	if (!EmpleadoDB) {

		throw new Error`Usuario con Id ${id} No existe`;
	} else {

		return EmpleadoDB;
	}


	//});

}


 let getSalario=(empleado)=>{
 	//return new Promise((resolve,reject)=>{

 		let SalarioDB=salarios.find(salario=>salario.id===empleado.id);


 		if(!SalarioDB){
 				throw new Error`No hay salario para el Empleado ${empleado.nombre}`;
 		}else{
 				return{
 					nombre:empleado.nombre,
 					salario:SalarioDB.valor
 				}
 		}

 }

 let getInformacion=async(id)=>{

 	let empleado= await getEmpleado(id);
 	let salario=await getSalario(empleado);
 	console.log(salario)

 	return`el empleado ${empleado.nombre} tiene  un salario ${salario.salario}`;
 }

 getInformacion(2)
 .then(resp=>console.log(resp))
 .catch(err=>console.log(err))