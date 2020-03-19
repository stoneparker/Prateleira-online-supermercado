import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text} from 'react-native'

import HomeScreen from './pages/Home'
import LogoCart from './design/Cart'

const Stack = createStackNavigator();

export default function Routes(){
   return (
      <NavigationContainer>
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
            }
         }>
            <Stack.Screen name='Home' component={HomeScreen} options={ () => (
               {
                 headerRight: () => <TouchableOpacity><LogoCart /></TouchableOpacity>
               }
            )}/>
         </Stack.Navigator>
      </NavigationContainer>
   );
}
