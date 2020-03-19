import React from 'react';
import {Image} from 'react-native';

export default function LogoCart(){
   return (
      <Image
         style={{width: 40, height: 40, marginRight: 10}}
         source={require('../../assets/supermarket.png')}
      />
   )
}
