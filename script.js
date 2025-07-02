// Base64 encoded SVG for empty state
const emptyStateSVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQgMi41ODM0VjYuNzVDMTQgNy40NDAyIDE0LjU5OTggOC4yNSAxNS4yNSA4LjI1SDE5LjQxNjZDMTkuOTQzNCA4LjI1IDIwLjM4MzQgOC41MjY2NiAyMC41OTM0IDguOTQ4MzNDMjAuNzQzNCA5LjIzMzMzIDIwLjc1ODQgOS42NjUgMjAuNjY4NCAxMC4xMDgzTDE4LjE2ODQgMTkuMTA4M0MxNy44MzM0IDIwLjI0ODMgMTcuMDQ4NCAyMS4yNSAxNS40OTg0IDIxLjI1SDguNTAxNTRDNi45NTE1NCAyMS4yNSA2LjE2NjU0IDIwLjI0ODMgNS44MzE1NCAxOS4xMDgzTDMuMzMxNTQgMTAuMTA4M0MzLjI0MTU0IDkuNjY1IDMuMjU2NTQgOS4yMzMzMyAzLjQwNjU0IDguOTQ4MzNDMy42MTY1NCA4LjUyNjY2IDQuMDU2NTQgOC4yNSA0LjU4MzU0IDguMjVIOC43NUM5LjQwMDE1IDguMjUgMTAgNy40NDAyIDEwIDYuNzVWMi41ODM0QzEwIDIuMTY2NjYgMTAuMjY1IDEuNzUgMTAuNjU4IDEuNTU4MzNDMTEuMDg4IDEuMzMzMzMgMTEuNTg4IDEuMzMzMzMgMTIuMDE4IDEuNTU4MzNDMTIuNDM1IDEuNzUgMTIuNzUgMi4xNjY2NiAxMi43NSAyLjU4MzRWNC4wMDAwMUMxMi43NSA0LjQxNDIxIDEyLjQxNCA0Ljc1IDEyIDQuNzVDMTEuNTg1NiA0Ljc1IDExLjI1IDQuNDE0MjEgMTEuMjUgNFYyLjU4MzRDMTAuOTE1IDIuMjUgMTAuNDg1IDIuMjUgMTAgMi41ODM0QzkuNjY1MDQgMi4yNSA5LjI1IDIuNTgzNCA5LjI1IDNWNC4wMDAwMUM5LjI1IDQuNDE0MjEgOC45MTQzNiA0Ljc1IDguNSA0Ljc1QzguMDg1NjQgNC43NSA3Ljc1IDQuNDE0MjEgNy43NSA0VjMuMDAwMDFDNy43NSAyLjU4MzM0IDcuMzM1MDQgMi4yNSA3IDIuNTgzMzRDNi42NjUwNCAyLjI1IDYuMjUgMi41ODM0IDYuMjUgM1Y0LjAwMDAxQzYuMjUgNC40MTQyMSA1LjkxNDM2IDQuNzUgNS41IDQuNzVDNS4wODU2NCA0Ljc1IDQuNzUgNC40MTQyMSA0Ljc1IDRWMi41ODM0QzQuNzUgMi4xNjY2NiA1LjAxNSAxLjc1IDUuNDA4IDEuNTU4MzNDNS44MzggMS4zMzMzMyA2LjMzOCAxLjMzMzMzIDYuNzY4IDEuNTU4MzNDNy4xODUgMS43NSA3LjUgMi4xNjY2NiA3LjUgMi41ODM0VjQuMDAwMDFDNy41IDQuNDE0MjEgNy4xNjQzNiA0Ljc1IDYuNzUgNC43NUM2LjMzNTY0IDQuNzUgNiA0LjQxNDIxIDYgNFYzLjAwMDAxQzYgMi40NDc3MiA2LjQ0NzcyIDIgNyAyQzcuNTUyMjggMiA4IDIuNDQ3NzIgOCAzVjQuMDAwMDFDOCA0LjQxNDIxIDcuNjY0MzYgNC43NSA3LjI1IDQuNzVDNi44MzU2NCA0Ljc1IDYuNSA0LjQxNDIxIDYuNSA0VjMuMDAwMDFDNi41IDIuNzI5MDYgNi42MzgwNSAyLjUwMTM0IDYuNzg0NjggMi4zNTE1NkM2Ljg5MjQ0IDIuMjQ3MjIgNy4wNDQ2OSAyLjE3NTg0IDcuMjEwOTQgMi4xNTgxM0M3LjQ0MTk0IDIuMTMzODIgNy42OTUzMSAyLjIwNDM4IDcuODk1MzEgMi4zNzQzOEM4LjA0NTMxIDIuNDk0MzggOC4xNzQwNiAyLjY4NDM4IDguMjI0MDYgMi45MDQzOEM4LjI3NDA2IDMuMTI0MzggOC4yNDAwNiAzLjM1NDM4IDguMTMwMDYgMy41MzQzOEM4LjAyMDA2IDMuNzE0MzggNy44NTAwNiAzLjg0NDM4IDcuNjYwMDYgMy44OTQzOEM3LjUyMDA2IDMuOTI0MzggNy4zODAwNiA0IDcuMjgwMDYgNC4xMUM3LjE4MDA2IDQuMjIgNy4xMjAwNiA0LjM1IDcuMTIwMDYgNC41VjZDNy4xMjAwNiA2LjQxNDIxIDYuNzgwNjQgNi43NSA2LjM2MDY0IDYuNzVDNS45NDYyOSA2Ljc1IDUuNjEwNjQgNi40MTQyMSA1LjYxMDY0IDZWMi41ODM0WiIgZmlsbD0iIzZjNzU3ZCIvPjwvc3ZnPg==";

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Initialize app
function init() {
    renderTasks();
    setupEventListeners();
    updateStats();
}

// Set up event listeners
function setupEventListeners() {
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
    
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });
}

// Add a new task
function addTask() {
    const title = taskInput.value.trim();
    if (title === '') return;
    
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date()
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateStats();
    
    // Reset input
    taskInput.value = '';
    taskInput.focus();
}

// Toggle task completion
function toggleTaskCompletion(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
    updateStats();
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
    updateStats();
}

// Clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
    updateStats();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    
    totalTasks.textContent = `Total: ${total} task${total !== 1 ? 's' : ''}`;
    completedTasks.textContent = `Completed: ${completed}`;
}

// Get empty state HTML
function getEmptyStateHTML(isInitial) {
    const message = isInitial 
        ? { title: 'No tasks yet', text: 'Add your first task to get started' }
        : { title: 'No tasks found', text: 'Try changing your filter or add a new task' };
    
    return `
        <li class="empty-state">
            <img src="${emptyStateSVG}" alt="No tasks">
            <h3>${message.title}</h3>
            <p>${message.text}</p>
        </li>
    `;
}

// Render tasks based on current filter
function renderTasks() {
    // Filter tasks
    let filteredTasks = [];
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else {
        filteredTasks = [...tasks];
    }
    
    // Render tasks or empty state
    if (filteredTasks.length === 0) {
        const isInitial = tasks.length === 0;
        taskList.innerHTML = getEmptyStateHTML(isInitial);
        return;
    }
    
    // Render task list
    taskList.innerHTML = filteredTasks.map(task => `
        <li class="task-item" data-id="${task.id}">
            <input type="checkbox" ${task.completed ? 'checked' : ''} class="task-checkbox">
            <div class="task-content">
                <div class="task-title ${task.completed ? 'completed' : ''}">${task.title}</div>
            </div>
            <div class="task-actions">
                <button class="action-btn complete" title="${task.completed ? 'Mark as active' : 'Mark as complete'}">
                    ${task.completed ? '↩' : '✓'}
                </button>
                <button class="action-btn delete" title="Delete task">🗑️</button>
            </div>
        </li>
    `).join('');
    
    // Add event listeners to task actions
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskId = parseInt(this.closest('.task-item').dataset.id);
            toggleTaskCompletion(taskId);
        });
    });
    
    document.querySelectorAll('.action-btn.complete').forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = parseInt(this.closest('.task-item').dataset.id);
            toggleTaskCompletion(taskId);
        });
    });
    
    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = parseInt(this.closest('.task-item').dataset.id);
            deleteTask(taskId);
        });
    });
}

// Initialize the app
init();