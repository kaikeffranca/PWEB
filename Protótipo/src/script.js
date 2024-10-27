function openLogin(){
    const modal = document.getElementById('modal-container-login')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == "modal-container-login" || e.target.id == "btn-fecharA"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container-login'
        }
    })
}

function openCadastro(){
    const modal = document.getElementById('modal-container-cadastro')
    modal.classList.add('mostrar')
    
    modal.addEventListener('click', (e) =>{
        if(e.target.id == "modal-container-cadastro" || e.target.id == "btn-fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container-cadastro'
        }
    })

}

function criarTarefa(){
    const modal = document.getElementById('modal-container-criar')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == "modal-container-criar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container-criar'
        }
    })
}

function editarTarefa(){
    const modal = document.getElementById('modal-container-editar')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == "modal-container-editar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container-editar'
        }
    })
}