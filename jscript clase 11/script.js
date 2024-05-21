var topping = prompt("Dime que topping quieres comprar");

var topping = "oreo";
var topping = "kitkat";
var topping = "kinder";
var precio1=10;
var precio2=15;
var precio3=25;
var preciofinal_1= 15 + 10;
var preciofinal_2= 15 + 15;
var preciofinal_3= 15 + 25;
var helado=15;

if(topping === "oreo"){
    console.log("El valor de el topping seleccionado es " + precio1 + "  " + "El precio final seria " + preciofinal_1
)
}
    
if(topping === "kitkat"){
    console.log("El valor de el topping seleccionado es " + precio2 + "  " + "El precio final seria " + preciofinal_2)
}

if(topping === "kinder"){
    console.log("El valor de el topping selecionado es " + precio3 + "  " + "El precio final seria " + preciofinal_3)
}

var pedido = prompt("Elige un menu")


switch(pedido.toLowerCase()) {
    case "carne":
        console.log("Si eliges carne, viene incluido con un vino tinto")
        break;
    case "pescado":
        console.log("Si eliges pescado, viene incluido con un vino blanco")
        break;
    case "verdura":
        console.log("Si eliges verdura, viene incluido con un agua")
        break;
    default:
        console.log("Elige algunas de estas 3 opciones: Carne, Verdura, Pescado")
}


 var array=[1,6,86,594,239]

console.log();

let index = array.length -1;
for (index ; index >= 0 ; index--) {
    alert("Tu numero es " + array[index] );
    console.log(array[index]);
}

var numero=6;
while(numero==6){
    console.log(numero)
    console.log(numero + " es más chico que 11")

    numero++
} 




