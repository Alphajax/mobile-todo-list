import React from 'react';
import TodoList from './src/layouts/ToDoList/ToDoList';
import {ToDoListStore} from './src/store/ToDoListStore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListDetails from './src/layouts/ListDetails/ListDetails';
import {RootStackParamList} from './src/types/navigation/types';
import CreateToDo from './src/layouts/CreateToDo/CreateToDo';

function App(): JSX.Element {
  const todoListStore = new ToDoListStore();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator id="todo-navigator">
        <Stack.Screen name="ToDoList">
          {props => <TodoList {...props} store={todoListStore} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          initialParams={{
            id: undefined,
          }}>
          {props => <ListDetails {...props} store={todoListStore} />}
        </Stack.Screen>
        <Stack.Screen
          name="Create"
          options={{
            presentation: 'modal',
          }}>
          {props => <CreateToDo {...props} store={todoListStore} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
