const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const tasksListElement = document.querySelector('.tasks-list');

tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-task-id', task.id);

    taskItem.innerHTML = `<div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
                    <label for="task-${task.id}"></label>
                </form>
                <span class="task-item__text">${task.text}</span>
            </div>
            <button class="task-item__delete-button default-button delete-button">
                Удалить
            </button>
        </div>`;

    tasksListElement.appendChild(taskItem);
});