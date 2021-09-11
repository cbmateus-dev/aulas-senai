function conversortemperatura(a,b=1.8,c=32) {
    let formula = a * b + c

    console.log('Temperatura', formula,'Fº')

    if (formula >=86) {
        console.log('Está quente')
    }
    else{
        console.log('Está Frio')
    }
}

conversortemperatura(30)