var funcionario1 = new Object()
funcionario1.matricula = "203425"
funcionario1.nome = "José Carlos"
funcionario1.funcao = "Gerente de Vendas"

alert(`Número da matricula: ${funcionario1.matricula}\nNome: ${funcionario1.nome}\nFunção: ${funcionario1.funcao}`)

var funcionario2 = {
    matricula : "203426",
    nome : "Pedro Lima",
    funcao : "Engenheiro Petroquímico" 
}

alert(`Número da matricula: ${funcionario2.matricula}\nNome: ${funcionario2.nome}\nFunção: ${funcionario2.funcao}`)

class Funcionario{
    constructor(){
        this.matricula
        this.nome
        this.funcao
    }

    setMatricula(val){
        return this.matricula = val
    }

    setNome(val){
        return this.nome = val
    }

    setFuncao(val){
        return this.funcao = val
    }

    getMatricula(){
        return this.matricula
    }

    getNome(){
        return this.nome
    }

    getFuncao(){
        return this.funcao
    }
}

var funcionario3 = new Funcionario()
funcionario3.setMatricula("203427")
funcionario3.setNome("Vanessa Silva")
funcionario3.setFuncao("Desenvolvedora de Software")

alert(`Número da Matrícula: ${funcionario3.getMatricula()}\nNome: ${funcionario3.getNome()}\nFunção: ${funcionario3.getFuncao()}`)