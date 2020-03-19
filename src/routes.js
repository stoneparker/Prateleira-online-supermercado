import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text} from 'react-native'

import HomeScreen from './pages/Home'
import ProfileScreen from './pages/Profile'
import LogoCart from './design/Cart'

const Stack = createStackNavigator();


function Shopping(){
   return (
         <Stack.Navigator initialRouteName='Home' screenOptions={
            {
               title: 'Mercado',
               headerStyle: {
                  backgroundColor: '#9E0000'
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24
               },
               headerTitleAlign: 'center', 
            }}>

            <Stack.Screen name='Home' component={HomeScreen} options={
               {
                 headerRight: () => <TouchableOpacity><LogoCart /></TouchableOpacity>
               }}/>
         </Stack.Navigator>
   );
}

const Drawer = createDrawerNavigator();
export default function Routes(){
   return(
      <NavigationContainer>
         <Drawer.Navigator initialRouteName="Shopping">
            <Drawer.Screen name="Shopping" component={Shopping}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
         </Drawer.Navigator>
      </NavigationContainer>
   );
}
