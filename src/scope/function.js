function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}`)
    }
}

greeting()
console.log(useName);   //No podemos acceder porque userName esta encapsulado dentro de greeting(), no es global