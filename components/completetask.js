//cria o método botão finalizar
const FinishButton = () => {

    const finishButton = document.createElement('button');

    finishButton.classList.add('check-button');
    finishButton.innerText = 'Concluir';

    finishButton.addEventListener('click', completeTask);

    return finishButton;

}

//função completar tarefa
const completeTask = (event) => {

    const finishButton = event.target;

    const completeTask = finishButton.parentElement;

    completeTask.classList.toggle('done');
}


export default FinishButton;