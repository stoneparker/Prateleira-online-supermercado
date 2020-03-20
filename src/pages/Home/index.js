import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'

export default function HomeScreen(){
   const sectors = {
      data: [
         "Tudo",
         "Mercearia",
         "Frios e Laticínios",
         "Adega",
         "Higiene e Limpeza",
         "Hortifruti",
      ]
   }

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <View style={styles.menu}>
            <FlatList 
               style={styles.flatlist}
               data={sectors.data}
               renderItem={({ item }) => <Text style={styles.sector}>{item}</Text>}
               keyExtractor={item => item}
               horizontal
               showsHorizontalScrollIndicator={false}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   menu: {
      height: '8%',
      width: '100%',
      backgroundColor: '#9E0000',
      top: 0
   },
   flatlist: {
      height: '100%',
   },
   sector: {
      backgroundColor: '#870000',
      height: '100%',
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 10,
      paddingRight: 10,
      textAlignVertical: "center",
      color: '#FFF',
      fontSize: 16,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
 }
})

