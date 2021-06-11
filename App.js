import React,{useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Alert,BackHandler, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View ,Keyboard, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Task from './components/Task';


let o=-1;
let n=1;

export default function App() {
  
  

  try {
  useEffect(() => load(),[]);
  }catch(t){};
 
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
 
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleAddTaskk = () =>{
    handleAddTask();
    
  }
  const handleAddTask = () =>{
    
   if(task===null) return;
    Keyboard.dismiss();
    o = taskItems.length;
    n = o+1;
    
    setTaskItems([...taskItems,task]);
    setTask(null);
   
    
    
  }
  const update = () =>{
    console.log(taskItems);
    let s = JSON.stringify(taskItems);
    AsyncStorage.setItem('user', s);
    
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    let s = JSON.stringify(taskItems);
    AsyncStorage.setItem('user', s);
  }
  
  const load = ()=>{
    AsyncStorage.getItem('user',(err,res)=>{
       let ta=JSON.parse(res);
       if(ta===null) return;
       setTaskItems(ta);       
      
  })
}



  useEffect(()=>{
    update();
  })
  
  
  return(
    
    
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>Todays Task</Text>
      <ScrollView style={styles.tasksWrapper}>
     
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
        </ScrollView>
        <KeyboardAvoidingView
        behavior={Platform.OS==='ios'?"padding":"height"}
        style={styles.addTask}>
          <TextInput style={styles.input} placeholder={"Write New Task"} value={task} onChangeText={text => setTask(text)}/>
        
          <TouchableOpacity onPress={()=>handleAddTaskk()}>
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
    paddingTop:10,
    marginBottom:"25%",
    paddingHorizontal:20,

  },
  sectionTitle:{
    paddingTop:80,
    paddingHorizontal:20,
    fontSize:30,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  addTask:{
    position:'absolute',
    bottom:"2%",
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
  borderColor:'#294248',
  borderWidth:5,
  textAlign:'center',
  marginRight:15,
  shadowColor:'gray',
  shadowRadius:25,
  
  
},
add:{
  width:55,
  height:55,
  borderWidth:5,
  borderRadius:55,
  marginRight:50,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'blue',
  shadowColor:'gray',
  shadowRadius:25,
  backgroundColor:'#66e592'
},
plus:{
  color:'#5e6135',
  fontSize:30
 
},
});
