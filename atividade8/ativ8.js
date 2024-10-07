var idade = [];
var genero = [];
var avaliacao = [];

function enviar(){
    var s;
    var vs = document.getElementsByName('genero');
    idade.push(Number(window.document.getElementById("txt-idade").value))
    avaliacao.push(Number(window.document.getElementById("opn").value))

    for(let i = 0; i < vs.length; i++){
        if(vs[i].checked){
            s = vs[i].value;
            break;
        }else{
            continue;
        }
    }

    genero.push(s);

    alert("Opinião salva!")
}

function avgAge(){
    var soma = 0;
    var media;

    for(let i = 0; i < idade.length; i++){
        soma += idade[i];
    }

    media = (soma / idade.length).toFixed(2);

    alert("A média de idade é " + media +" anos.");
}

function older(){
    var maisVelho;

    maisVelho = Math.max.apply(null, idade);

    alert("A pessoa mais velha tem " + maisVelho + " anos.");
}

function younger(){
    var maisNovo;

    maisNovo = Math.min.apply(null, idade);

    alert("A pessoa mais nova tem " + maisNovo + " anos.")
}

function pessimo(){
    var qtdPessimo = 0;

    for(let i = 0; i < avaliacao.length; i++){
        if(avaliacao[i] == 1){
            qtdPessimo += 1;
        }else{
            continue;
        }
    }
    
    alert(qtdPessimo + " pessoas opinaram que o filme é péssimo.")
}

function bom(){
    var qtdBom = 0;
    var percentual;

    for(let i = 0; i < avaliacao.length; i++){
        if((avaliacao[i] == 3) || (avaliacao[i] == 4)){
            qtdBom += 1;
        }
    }

    percentual = ((qtdBom * 100)/avaliacao.length).toFixed(2);

    alert(percentual + "% avaliaram o filme como bom ou ótimo.")
}

function contGenero(){
    var qtdH = 0;
    var qtdM = 0;

    for(let i = 0; i < genero.length; i++){
        if(genero[i] == "Feminino"){
            qtdM += 1;
        }else if(genero[i] == "Masculino"){
            qtdH += 1;
        }else{
            continue;
        }
    }

    alert("Mulheres : " + qtdM + "\nHomens : " + qtdH);
}