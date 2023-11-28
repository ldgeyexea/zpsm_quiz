import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScrean from './components/HomeScrean';
import ResultsScrean from './components/ResultsScrean';
import TestScrean from './components/TestScrean';






const Drawer = createDrawerNavigator();






export default function App() {

  const tests=[
    ['title1','tag1',"test about tag 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title2','tag2',"test about tag 2 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title3','tag3',"test about tag 3 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title4','tag4',"test about tag 4 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title5','tag5',"test about tag 5 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title6','tag6',"test about tag 6 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"],
    ['title7','tag7',"test about tag 7 lorem ipsum lorem ipsum lorem ipsum lorem ipsum"]
    ]

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePage">
        <Drawer.Screen name="HomePage" component={HomeScrean} />
        <Drawer.Screen name="Result" component={ResultsScrean} />
        {tests.map((test)=>(
                <Drawer.Screen name={test[0]} >
                    {(props)=> <TestScrean title={test[0]}   />}
                </Drawer.Screen>
                ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );  
}