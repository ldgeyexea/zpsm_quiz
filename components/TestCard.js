import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'



class TestCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            tag: props.tag,
            description: props.description,
            navigation: props.navigation
        }
    }

    render() {
        return (
            <TouchableOpacity style={styleTestCard.containerTestCard} onPress={() => { this.state.navigation.navigate(this.state.title, { value: 86 }) }}>
                <Text style={styleTestCard.heading}>{this.state.title}</Text>
                <Text style={styleTestCard.tag}>{this.state.tag}</Text>
                <Text style={styleTestCard.description}>{this.state.description}</Text>
            </TouchableOpacity>

        )
    }
}
export default TestCard

const styleTestCard = StyleSheet.create({
    containerTestCard: {
        width: '90%',
        margin: 'auto',
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,


    },
    heading: {
        fontSize: 20,
        color: 'black'
    },
    tag: {
        fontSize: 15,
        color: 'blue',
        margin: 10
    },
    description: {
        fontSize: 13,
        color: 'grey',
        marginLeft: 15,
    }


});