import React from 'react';
import {Image} from 'react-native';

export default function LogoHamburguer(){
   return (
      <Image
         style={{width: 30, height: 30, marginLeft: 10}}
         source={require('../../assets/menu.png')}
      />
   )
}
