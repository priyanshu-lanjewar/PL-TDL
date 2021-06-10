import { platform } from 'process';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Task</Text>
        <View style={styles.items}>
        <Task text="Task1"/>
        <Task text="Task2"/>
        <Task/>
        <Task/>
        </View>
        </View> 
        <KeyboardAvoidingView
        behavior={Platform.OS==='ios'?"padding":"height"}
        style={styles.addTask}>
          <TextInput style={styles.input} placeholder={"Write New Task"}/>
        
          <TouchableOpacity>
            <View style={styles.add}>
              <Text style={styles.plus}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:30,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  addTask:{
    position:'absolute',
    bottom:60,
    width:'90%',
    flexDirection:'row',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center'
    },
input:{
  paddingVertical:15,
  marginLeft:50,
  width:'80%',
  backgroundColor:'#FFFFFF',
  borderRadius:15,
  shadowColor:'black',
  borderColor:'#C0C0C0',
  borderWidth:2,
  textAlign:'center',
  marginLeft: 5
},
add:{
  width:'80%',
  height:55,
  borderWidth:2,
  borderColor:'gray',
  borderRadius:55,
  marginRight:25
},
plus:{},
});
