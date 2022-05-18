function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    seletor = document.getElementById("selector").value

    switch(seletor){
        case "+":
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} + ${n2} é igual a: ${calculo}`
            break
        case "-":
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} - ${n2} é igual a: ${calculo}`
            break
        
        case "*":
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é igual a: ${calculo}` 
            break

        case "/":
            calculo = Math.round(n1 / n2)
            if(Number.isNaN(calculo)){
                document.getElementById('resultado').innerHTML = `Insira um divisivel válido!`
            }else{
            document.getElementById('resultado').innerHTML = `O resultado da divisão de ${n1} / ${n2} é: ${calculo}`
            break
            }

    }
}
console.log(n1 + n2);