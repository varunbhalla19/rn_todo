import React from 'react';

import {StyleSheet} from 'react-native';

import Colors from './Colors';

const Fonts = {
  Regular: 'TitilliumWeb-Regular',
  Bold: 'TitilliumWeb-Bold',
  Light: 'TitilliumWeb-Light',
};


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  headTxt: {
    marginVertical: 24,
    paddingBottom: 8,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: Fonts.Bold,
    borderBottomColor: '#111111',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inpContainer: {
    alignSelf: 'stretch',
    margin: 8,
  },
  inp: {
    alignSelf: 'stretch',
    borderColor: '#aaaaaa',
    borderWidth: 1,
    fontFamily: Fonts.Regular,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  inpBut: {
    backgroundColor: Colors.primarycolor,
    paddingVertical: 16,
  },
  inpButTxt: {
    alignSelf: 'center',
    color: '#eeeeee',
    fontFamily: Fonts.Regular,
    fontSize: 16,
  },
  taskContainer: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    color: '#111111',
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
  imgCover: {
    flexDirection: 'row',
  },
  taskImg: {
    height: 16,
    width: 16,
    marginLeft: 24,
  },
});
