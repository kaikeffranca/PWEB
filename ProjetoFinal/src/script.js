const $modal = document.getElementById("modal-container-criar")

const $titulo = document.getElementById('desc-tarefa');
const $participantes = document.getElementById('nome-participantes');
const $data = document.getElementById('set-data');
const $fase = document.getElementById('fase');
const $idInput = document.getElementById('IdInput');


const $createBtn = document.getElementById('create-btn')
const $editBtn = document.getElementById('edit-btn')

var tarefa = localStorage.getItem("tarefa");

var cardList = tarefa ? JSON.parse(tarefa) : []

gerarCard()

function abrirTarefa(id) {
    $modal.style.display = "flex";
    if (id) {
        $createBtn.style.display = "none";
        $editBtn.style.display = "block";

        const index = cardList.findIndex(function (tarefa) {
            return tarefa.taskId == id
        })
        const Tarefa = cardList[index];

        $idInput.value = Tarefa.taskId
        $titulo.value = Tarefa.taskTitle;
        $participantes.value = Tarefa.taskPeople;
        $data.value = Tarefa.taskDate;
        $fase.value = Tarefa.taskPhase;
    } else {
        $createBtn.style.display = "block";
        $editBtn.style.display = "none";
    }
}

function createTask() {
    const novaTarefa = {
        taskId: Math.floor(Math.random() * 999999999999),
        taskTitle: $titulo.value,
        taskPeople: $participantes.value,
        taskDate: $data.value,
        taskPhase: $fase.value,
    }

    cardList.push(novaTarefa)

    localStorage.setItem("tarefa", JSON.stringify(cardList))

    gerarCard(novaTarefa.taskPhase);

    closeModal()
}

function editTask() {

    const Tarefa = {
        taskId: $idInput.value,
        taskTitle: $titulo.value,
        taskPeople: $participantes.value,
        taskDate: $data.value,
        taskPhase: $fase.value,
    }

    const index = cardList.findIndex(function (tarefa) {
        return tarefa.taskId == $idInput.value
    })
    cardList[index] = Tarefa

    localStorage.setItem("tarefa", JSON.stringify(cardList))

    gerarCard()

    closeModal()
}

function gerarCard() {
    clearColumn();
    cardList.forEach(function(tarefa){
        const dataFormatada = moment(tarefa.taskDate).format('DD/MM/YYYY');

        const columnBody = document.querySelector(`[data-fase="${tarefa.taskPhase}"] .andamento .separador`)

        const cardContent = `
            <div id="${tarefa.taskId}" class="card" draggable ="true" ondragstart="dragstart_handler(event)">
                    <h4 class="card-title">${tarefa.taskTitle}</h4>
                    <p class="list-title">Participantes:${tarefa.taskPeople}
                    </p>
                    <p class="data">Data: ${dataFormatada}</p>
                    <input type="button" value="Editar" class="edit" onclick="abrirTarefa(${tarefa.taskId}, '${tarefa.taskPhase}')">
                </div> 
        `
        columnBody.innerHTML += cardContent;
    })

}

function clearColumn(){
    document.querySelector(`[data-fase="1"] .andamento .separador`).innerHTML = '';
    document.querySelector(`[data-fase="2"] .andamento .separador`).innerHTML = '';
    document.querySelector(`[data-fase="3"] .andamento .separador`).innerHTML = '';
}

function closeModal() {
    $modal.style.display = "none"

    $idInput.value = "";
    $titulo.value = "";
    $participantes.value = "";
    $data.value = "";
}

function changeColumn(task_id, fase_id){
    if(task_id && fase_id){
    cardList = cardList.map((tarefa) =>{
        if(task_id != tarefa.taskId) return tarefa;


        return {
            ... tarefa,
            taskPhase: fase_id
        }
    })
    }

    localStorage.setItem("tarefa", JSON.stringify(cardList))

    gerarCard();
}

function dragstart_handler(ev){
    console.log(ev)

    ev.dataTransfer.setData("my-data", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}

function dragover_handler(ev){
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev){
    ev.preventDefault();

    const task_id = ev.dataTransfer.getData("my-data")
    const column_id = ev.target.dataset.div;

    changeColumn(task_id, column_id);

}