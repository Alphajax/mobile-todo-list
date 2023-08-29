import {observable, action, makeObservable} from 'mobx';
import {IToDo} from '../types/ToDoList/ToDoList.types';
import {
  CreateToDoType,
  ToggleCompleteTodoType,
  UpdateToDoType,
} from '../types/ToDoList/ToDoListStore.types';

export class ToDoListStore {
  todos: IToDo[] = [
    {
      id: '1',
      name: 'List Item',
      isCompleted: false,
      priority: 1,
    },
    {
      id: '2',
      name: 'List Item',
      isCompleted: true,
      priority: 1,
    },
    {
      id: '3',
      name: 'List Item',
      isCompleted: false,
      priority: 1,
    },
    {
      id: '4',
      name: 'List Item',
      isCompleted: false,
      priority: 1,
    },
    {
      id: '5',
      name: 'List Item',
      isCompleted: false,
      priority: 1,
    },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      toggleCompleteToDo: action,
      updateToDo: action,
      createToDo: action,
    });
  }

  toggleCompleteToDo: ToggleCompleteTodoType = todoId => {
    const candidateIndex = this.todos.findIndex(todo => todo.id === todoId);
    if (candidateIndex > -1) {
      const current = this.todos[candidateIndex].isCompleted;
      this.todos[candidateIndex].isCompleted = !current;
    }
  };

  updateToDo: UpdateToDoType = (todoId, newTodo) => {
    const candidateIndex = this.todos.findIndex(todo => todo.id === todoId);
    if (candidateIndex > -1) {
      this.todos[candidateIndex] = {
        ...this.todos[candidateIndex],
        ...newTodo,
      };
    }
  };

  createToDo: CreateToDoType = newTodo => {
    const candidateIndex = this.todos.findIndex(todo => todo.id === newTodo.id);
    if (candidateIndex === -1) {
      this.todos.push(newTodo);
    }
  };
}
