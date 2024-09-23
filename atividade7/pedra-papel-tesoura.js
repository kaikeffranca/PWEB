function escolha(e){
    var x = Math.random();


    //0.33 pedra; 0.66 papel; 0.99 tesoura;

    if(x <= 0.33){
        if(e == 2){
            alert("O computador escolheu pedra, você venceu!");
        }else if(e == 1){
            alert("O computador escolheu pedra, você perdeu!")
        }else{
            alert("O computador escolheu pedra, empate!")
        }   
    }else if(x <= 0.66){
        if(e == 2){
            alert("O computador escolheu papel, empate!");
        }else if(e == 1){
            alert("O computador escolheu papel, você venceu!")
        }else{
            alert("O computador escolheu papel, você perdeu!")
        }
    }else{
        if(e == 2){
            alert("O computador escolheu tesoura, você perdeu!");
        }else if(e == 1){
            alert("O computador escolheu tesoura, empate!")
        }else{
            alert("O computador escolheu tesoura, você venceu!")
        }
    }
}