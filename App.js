import React,{useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View ,Keyboard, ScrollView} from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Task</Text>
        <View style={styles.items}>
        {
          taskItems.map((item,index)=>{
            return (
              <TouchableOpacity onPress={()=>completeTask(index)}>
                <Task key={index} text={item}/>
              </TouchableOpacity>
            )
            
          })
        }
        </View>
        </View> 
        </ScrollView>
        <KeyboardAvoidingView
        behavior={Platform.OS==='ios'?"padding":"height"}
        style={styles.addTask}>
          <TextInput style={styles.input} placeholder={"Write New Task"} value={task} onChangeText={text => setTask(text)}/>
        
          <TouchableOpacity onPress={()=>handleAddTask()}>
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
    alignItems:'center',
    alignSelf:'center'
    },
input:{
  paddingVertical:15,
  marginLeft:50,
  width:'80%',
  backgroundColor:'#FFFFFF',
  borderRadius:15,
  shadowColor:'black',
  borderColor:'pink',
  borderWidth:5,
  textAlign:'center',
  marginRight:15,
  shadowColor:'gray',
  shadowRadius:25
  
},
add:{
  width:55,
  height:55,
  borderWidth:5,
  borderColor:'white',
  borderRadius:55,
  marginRight:50,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'blue',
  shadowColor:'gray',
  shadowRadius:25,
},
plus:{
  color:'blue',
  fontSize:30
 
},
});
