import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IToDoListStore} from '../../types/ToDoList/ToDoListStore.types';
import {RootStackParamList} from '../../types/navigation/types';

export interface IListDetailsProps {
  store: IToDoListStore;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ToDoList',
    'todo-navigator'
  >;
}
