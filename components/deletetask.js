//Função botão deletar
const DeleteButton = () => {

    const deleteButton = document.createElement('button');

    deleteButton.innerText = 'Deletar';

    deleteButton.addEventListener('click', removeTask);

    return deleteButton;

}

//Função botão remover
const removeTask = (event) => {

    const deleteButton = event.target;

    const completeTask = deleteButton.parentElement;

    completeTask.remove();

    return deleteButton;

}


export default DeleteButton
