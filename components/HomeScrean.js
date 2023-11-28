import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import TestCard from './TestCard'
import { ScrollView } from 'react-native-gesture-handler'



class HomeScrean extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tests: [
                ['title1', 'tag1', "test about tag 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title2', 'tag2', "test about tag 2 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title2', 'tag3', "test about tag 3 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title3', 'tag4', "test about tag 4 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title4', 'tag5', "test about tag 5 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title5', 'tag6', "test about tag 6 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
                ['title6', 'tag7', "test about tag 7 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"]
            ],
        }

    }

    render() {
        return (
            <ScrollView >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'scroll' }}>
                    {this.state.tests.map((test) => (
                        <TestCard title={test[0]} tag={test[1]} description={test[2]} navigation={this.props.navigation} />
                    ))}
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text>check your results</Text>
                        <Button
                            title='go to ResultScrean'

                            onPress={() => { this.props.navigation.navigate('Result') }}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default HomeScrean