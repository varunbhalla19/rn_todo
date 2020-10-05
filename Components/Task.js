import React, {useState} from 'react';

import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';

import styles from '../Styles';

export default ({item, dispatch}) => {
  const [editMode, setEditMode] = useState(false);

  const [editVal, setEditVal] = useState(item.value);

  return (
    <View style={[styles.inpContainer, styles.taskContainer]}>
      {editMode ? (
        <TextInput
          style={[styles.inp, {flex: 1}]}
          value={editVal}
          onChangeText={(text) => setEditVal(text)}
        />
      ) : (
        <Text style={styles.taskText}> {item.value} </Text>
      )}

      <View style={styles.imgCover}>
        <TouchableOpacity onPress={() => setEditMode(!editMode)}>
          <Image
            style={styles.taskImg}
            source={require('../assets/images/pencil.png')}
          />
        </TouchableOpacity>
        {editMode ? (
          <TouchableOpacity
            onPress={() => {
              dispatch({type: 'EDIT', payload: {id: item.id, value: editVal}});
              setEditMode(false);
            }}>
            <Image
              style={styles.taskImg}
              source={require('../assets/images/send.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => dispatch({type: 'DELETE', payload: {id: item.id}})}>
            <Image
              style={styles.taskImg}
              source={require('../assets/images/trash.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
