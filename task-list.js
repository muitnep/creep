(() => {

    const createTask = (event) => {

        event.preventDefault();

        const list = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const value = input.value;

        const task = document.createElement('li');
        task.classList.add('task');
        const content = `<p class="content">${value}</p>`

        task.innerHTML = content;

        task.appendChild(FinishButton());
        task.appendChild(DeleteButton());
        list.appendChild(task);
        input.value = '';

    }


    const newTask = document.querySelector('[data-form-button]');


    newTask.addEventListener('click', createTask);

    const FinishButton = () => {

        const finishButton = document.createElement('button');

        finishButton.classList.add('check-button');
        finishButton.innerText = 'Concluído';

        finishButton.addEventListener('click', completeTask);

        return finishButton;

    }

    const completeTask = (event) => {

        const finishButton = event.target;

        const completeTask = finishButton.parentElement;

        completeTask.classList.toggle('done');
    }

    const DeleteButton = () => {

        const deleteButton = document.createElement('button');

        deleteButton.innerText = 'Deletar';

        deleteButton.addEventListener('click', removeTask);

        return deleteButton;

    }

    const removeTask = (event) => {

        const deleteButton = event.target;

        const completeTask = deleteButton.parentElement;

        completeTask.remove();

        return deleteButton;

    }


})();