//ECMAScript6 -> Block Scope Let y const
//Las variables definidas en el blocke, solo pueden usarse dentro del bloque
function fruits(){  //Bloque: todo lo definido dentro de handleBars {{{}}}
    if (true){
        var fruit1 = 'Apple'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Banana'
        console.log(fruit2) //Se puede llamar    -function scope
    console.log(fruit3) //No se puede llamar -block scope
    }
    console.log(fruit1) //Se puede llamar    -function scope
    console.log(fruit2) //No se puede llamar -block scope
    console.log(fruit3) //No se puede llamar -block scope
}

fruits()