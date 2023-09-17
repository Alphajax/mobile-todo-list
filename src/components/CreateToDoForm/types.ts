import {IToDoListStore} from '../../types/ToDoList/ToDoListStore.types';

export interface ICreateToDoFormProps {
  store: IToDoListStore;
  showCreateItemError: () => void;
  showCreateItemSuccess: () => void;
}
