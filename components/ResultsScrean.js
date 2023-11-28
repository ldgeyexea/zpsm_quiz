import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { Table, Row, Rows } from 'react-native-table-component'

class ResultsScrean extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                ["user1", 10, 'test1', '26-12-2023'],
                ["user2", 11, 'test1', '26-12-2023'],
                ["user3", 12, 'test1', '26-12-2023'],
                ["user4", 13, 'test1', '26-12-2023'],
                ["user5", 14, 'test1', '26-12-2023'],
            ],
            tableHead: ['name', 'points', 'type', 'date']
        }
    }

    render() {
        const { tableHead, tableData } = this.state;
        return (
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
              <Rows data={this.state.users} style={styles.row} textStyle={styles.text} />
            </Table>
          </View>
        );
      }
}
export default ResultsScrean


const styles = StyleSheet.create({
    container: { width:'100%', display :'flex'},
    head: {  backgroundColor: 'gray',  width:'100%',display:'flex'},
    headText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'center',color:'black'},
    
    
})