function maior(){
    var x = [Number(window.document.getElementById("valor1m").value),Number(window.document.getElementById("valor2m").value),Number(window.document.getElementById("valor3m").value)];
    var resposta = window.document.getElementsByClassName('resposta') [0];

    var maior = x[0];

    for(var i=0; i < x.length; i++){
        if(x[i]>maior){
            maior = x[i];
        }
    }

    resposta.innerHTML = `O maior número é ${maior}! ✅`;
}

function order(){
    var x = [Number(window.document.getElementById("valor1o").value),Number(window.document.getElementById("valor2o").value),Number(window.document.getElementById("valor3o").value)];
    var resposta = window.document.getElementsByClassName('resposta') [1];

    x.sort((a,b)=> a - b);

    resposta.innerHTML = `Os números em ordem crescente: ${x[0]}, ${x[1]}, ${x[2]} ✅`;
}

function verifTriangulo(){
    var x = [Number(window.document.getElementById("valor1t").value),Number(window.document.getElementById("valor2t").value),Number(window.document.getElementById("valor3t").value)];
    var resposta = window.document.getElementsByClassName('resposta') [2];

    if((x[0]<x[1]+x[2]) && (x[1]<x[2]+x[0]) && (x[2]<x[1]+x[0])){
        if(x[0]==x[1] && x[0]==x[2]){
            resposta.innerHTML = `Triângulo Equilátero! ✅`;
        }else if((x[0]==x[1]) || (x[0]==x[2]) || (x[2]==x[1])){
            resposta.innerHTML = `Triângulo Isósceles! ✅`;
        }else{
            resposta.innerHTML = `Triângulo Escaleno! ✅`;
        }
    }else{
        resposta.innerHTML = `Triângulo inválido!`;
    }
}

function palindromo(){
    var plv = window.document.getElementById("plvP").value;
    var mid = parseInt(plv.length/2);
    var fim = (plv.length - 1);
    var verify = true;
    var resposta = window.document.getElementsByClassName('resposta')[3];

    for(let i = 0, f = fim; i <= mid, f > mid; i++, f--){
        if(plv[i]!=plv[f]){
            verify = false;
        }else{
            continue;
        }
    }

    if(verify){
        resposta.innerHTML = `É palíndromo!`;
    }else{
        resposta.innerHTML = `Não é palíndromo!`
    }
}