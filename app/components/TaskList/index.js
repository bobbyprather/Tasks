// Tasks/app/components/TasksList/index.js 

import React, { Component } from 'react'; 

import { 
  AsynStorage,
  ListView, 
  Text, 
  TextInput,
  View
} from 'react-native'; 

import  styles from './styles.js';

export default class TasksList extends Component { 
    constructor (props) { 
        super (props); 
    
        const ds = new ListView.DataSource({ 
          rowHasChanged: (r1, r2) => r1 !== r2 
        }); 
    
        this.state = { 
          ds: new ListView.DataSource({ 
            rowHasChanged: (r1, r2) => r1 !== r2 
          }), 
          listOfTasks: ['row1'], 
          text: '' 
        }; 
      } 



    _addTask () { 
        const listOfTasks = [...this.state.listOfTasks, this.state.text]; 
    
        this.setState({ 
          listOfTasks 
        }); 
    
        this._changeTextInputValue('');
      } 

      _changeTextInputValue (text) { 
        this.setState({ 
          text 
        }); 
      } 

      _renderRowData (rowData) { 
        console.log('RenderData');
        return ( 
          <Text>{ rowData }</Text> 
        ) 
      } 
    

  render () { 
    const dataSource = 
    this.state.ds.cloneWithRows(this.state.listOfTasks); 
    console.log('Render');
    return ( 
       
        <View style={ styles.container }> 
          <TextInput 
            autoCorrect={ false } 
            onChangeText={ (text) => this._changeTextInputValue(text) } 
            onSubmitEditing={ () => this._addTask() } 
            returnKeyType={ 'done' } 
            style={ styles.textInput } 
            value={ this.state.text } 
          /> 

          <ListView 
          dataSource={ dataSource } 
          enableEmptySections={ true } 
          renderRow={ (rowData) => this._renderRowData(rowData) } 
        /> 
      </View> 
    ); 
  } 
} 