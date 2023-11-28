import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler'


function Question(props)
{


    return (
        <View style={styles.container}>
        

            <Text style={styles.question}>{props.question}</Text>

            <View style={styles.containerAnswers}>
                {props.answers.map((item,key) => (
                    
                                        <TouchableOpacity
                    
                                        style={styles.answer}
                                        key={item}
                                        onPress={() => {
                                            navigation.Navigate('question 2')
                                        }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                ))}

            </View>
        </View>
    );
}
export default Question


const styles = StyleSheet.create({
    container: {
        width:'100%',
      
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    containerAnswers: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        flexWrap:'wrap',
        
    },
    answer: {
        width: 160,
        borderWidth:2,
        borderRadius:10,
        minHeight: 80,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    question:{
    fontSize:20,
    width:'80%',
    },
    informationContainer:{
        width:'90%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom:200,
        marginTop:20,

    }
});

