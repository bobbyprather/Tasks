import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import TaskList from './app/components/TaskList';
export default class App extends React.Component {


  render() {
    return (
      <View>
        <TaskList/>
      </View>
    );
  }


}
