import React from 'react';
import {Image} from 'react-native';

export default function LogoCart(){
   return (
      <Image
         style={{width: 50, height: 50}}
         source={require('../../assets/cart.png')}
      />
   )
}
