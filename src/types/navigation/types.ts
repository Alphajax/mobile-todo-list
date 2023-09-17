import {IToDoListStore} from '../ToDoList/ToDoListStore.types';

export type RootStackParamList = {
  ToDoList: {
    store: IToDoListStore;
  };
  Details: {
    store: IToDoListStore;
    id?: string;
  };
  Create: {
    store: IToDoListStore;
  };
};
