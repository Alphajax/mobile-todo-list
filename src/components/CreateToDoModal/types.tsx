import {IToDoListStore} from '../../types/ToDoList/ToDoListStore.types';

export interface ICreateToDoModalProps {
  isOpened: boolean;
  toggleModalVisibility: (isVisible?: boolean) => void;
  store: IToDoListStore;
}
