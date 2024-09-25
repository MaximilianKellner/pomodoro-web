async function loadToDoItemsfromJson() {

    const loadTodos = async (filename, containerId) => {
        const response = await fetch("./json/"+filename);
        const todos = await response.json();
        const todoContainer = document.getElementById(containerId);

        todoContainer.innerHTML = todos.map(todo => `
            <li class="tabbarItem">
                <input type="checkbox" class="styled-checkbox" ${todo.completed ? 'checked' : ''}>
                <p>${todo.title}</p>
            </li>
        `).join('');
    };

    await loadTodos('privat.json', 'Privat');
    await loadTodos('uni.json', 'Uni');
    await loadTodos('arbeit.json', 'Arbeit');
}

loadToDoItemsfromJson();