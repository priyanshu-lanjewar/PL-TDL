import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task =(props) =>{
    return(
        <View style={styles.item}>
             <View style={styles.itemLeft}>
                 <TouchableOpacity style={styles.square}></TouchableOpacity>
             
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:15,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        marginBottom:15,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    itemLeft:{
        flexDirection:'row',
        alignItems: 'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor : 'blue',
        opacity:0.4,
        borderRadius:3,
        marginRight:10
    },
    itemText:{
       maxWidth:'80%',

    },
    circle:{
        width:18,
        height:18,
        borderColor:'red',
        borderWidth:2,
        borderRadius:15
    }
})

export default Task;