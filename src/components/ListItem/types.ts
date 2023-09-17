import {IToDo} from '../../types/ToDoList/ToDoList.types';
import {ToggleCompleteTodoType} from '../../types/ToDoList/ToDoListStore.types';

export interface IListItemProps {
  todo: IToDo;
  toggleCompleteToDo: ToggleCompleteTodoType;
  showListItemDetails: () => void
}
