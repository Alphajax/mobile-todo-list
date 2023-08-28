import {IToDo} from './ToDoList.types';

export interface IToDoListStore {
  todos: IToDo[];
  toggleCompleteToDo: ToggleCompleteTodoType;
}

export type ToggleCompleteTodoType = (todoId: string) => void;
