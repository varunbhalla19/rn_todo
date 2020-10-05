import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../Styles';

export default ({dispatch, taskValue, setTaskValue}) => {
  return (
    <View style={[styles.inpContainer, {zIndex:101}]}>
      <TextInput
        placeholder="Add Task..."
        onChangeText={(text) => setTaskValue(text)}
        value={taskValue}
        style={[styles.inp, styles.inpContainer]}
      />
      <TouchableOpacity
        onPress={() => {
          if (taskValue) {
            dispatch({
              type: 'ADD',
              payload: {value: taskValue, id: String(Date.now())},
            });
          }
          setTaskValue('');
        }}
        style={[styles.inpContainer, styles.inpBut]}>
        <Text style={[styles.inpButTxt]}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};
