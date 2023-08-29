import {IToDo} from './ToDoList.types';

export interface IToDoListStore {
  todos: IToDo[];
  toggleCompleteToDo: ToggleCompleteTodoType;
  updateToDo: UpdateToDoType;
  createToDo: CreateToDoType;
}

export type ToggleCompleteTodoType = (todoId: string) => void;

export type UpdateToDoType = (
  todoId: string,
  dataToUpdate: Partial<IToDo>,
) => void;

export type CreateToDoType = (newTodo: IToDo) => void;
