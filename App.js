import React, {useReducer, useState} from 'react';

import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableNativeFeedback,
  FlatList,
  Image,
} from 'react-native';

import styles from './Styles';
import TaskItem from './Components/Task';
import TaskInput from './Components/TaskInput';

const initTasks = [
  {value: 'Task A', id: '1'},
  {value: 'Task B', id: '2'},
  {value: 'Task C', id: '3'},
  {value: 'Task D', id: '4'},
  {value: 'Task E', id: '5'},
  {value: 'Task F', id: '6'},
  {value: 'Task G', id: '7'},
  {value: 'Task H', id: '8'},
  {value: 'Task I', id: '9'},
];

const initReducer = (state = initTasks, {type, payload}) => {
  switch (type) {
    case 'ADD':
      return [...state, payload];

    case 'EDIT':
      return state.map((task) =>
        task.id === payload.id ? {...task, value: payload.value} : task,
      );

    case 'DELETE':
      return state.filter((task) => task.id !== payload.id);

    default:
      return state;
  }
};

const App = () => {
  const [taskValue, setTaskValue] = useState('');

  const [tasks, dispatch] = useReducer(initReducer, initTasks);

  return (
    <>
      <StatusBar backgroundColor="#dddddd" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.headTxt}>Todo</Text>

        <TaskInput
          dispatch={dispatch}
          setTaskValue={setTaskValue}
          taskValue={taskValue}
        />

        <KeyboardAvoidingView keyboardVerticalOffset={100} style={[styles.container, styles.inpContainer]}>
          <ScrollView>
            {tasks.map((item) => (
              <TaskItem item={item} key={item.id} dispatch={dispatch} />
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default App;

// const styles =
// {
/* <KeyboardAwareFlatList
            enableAutomaticScroll={true}
            // enableOnAndroid={true}
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({item}) => (
              <TaskItem item={item} dispatch={dispatch} />
            )}
          /> */
// }

// {
/* <FlatList
            // enableOnAndroid={true}
            // enableAutomaticScroll={true}
            // contentContainerStyle={{flex:1}}
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({item}) => (
              <TaskItem item={item} dispatch={dispatch} />
            )}
          /> */
// }

// {
/* <FlatList
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({item}) => (
              <TaskItem item={item} dispatch={dispatch} />
            )}
          /> */
// }
