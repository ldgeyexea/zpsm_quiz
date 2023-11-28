import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import Question from './Question'



class TestScreen extends React.Component {
    constructor(props,route) {
        super(props);
        this.state = {
            quiz: [
                [['question 1'],['question 1 writen to be long loremIpsum loremIpsum loremIpsum loremIpsum loremIpsum'], ['a', 'b', 'c', 'd']],
                [['question 2'],['question 2'], ['a', 'b', 'c', 'd']],
                [['question 3'],['question 3'], ['a', 'b', 'c', 'd']],
                [['question 4'],['question 4'], ['a', 'b', 'c', 'd']],
                [['question 5'],['question 5'], ['a', 'b', 'c', 'd']],
                [['question 6'],['question 6'], ['a', 'b', 'c', 'd']],
            ],
            Stack: createNativeStackNavigator(),
            Value:route.Value,
        };
        console.log(this.state.Value)
    }



    render() {
        const answers = this.state.quiz[0][1]
        const question = this.state.quiz[0][0]
        const Stack = this.state.Stack

        return (


                <NavigationContainer independent={true} style={styles.container}>

                    <Stack.Navigator initialRouteName={this.state.quiz[0][1][0]} style={styles.container2}>

                    {this.state.quiz.map(
                        (item)=>
                    (
                        <Stack.Screen name={item[0][0]}> 
                            {(props)=> <Question  question={item[1][0]}  answers={item[2]}  />}
                        </Stack.Screen>
                    )
                    )}



                    </Stack.Navigator>


                </NavigationContainer>
          

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',


    },
    containerAnswers: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        flexWrap: 'wrap',


    },
    container2: {
        backgroundColor: 'blue',
        width: '100%',
    },
    answer: {
        width: 160,
        borderWidth: 2,
        borderRadius: 10,
        minHeight: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    question: {
        fontSize: 20,
        width: '80%',
    },
    informationContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 200,
        marginTop: 20,

    }
});

export default TestScreen;