import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Shaun', id: '1'},
    {name: 'Yoshi', id: '2'},
    {name: 'Mario', id: '3'},
    {name: 'Luigi', id: '4'},
    {name: 'Peach', id: '5'},
    {name: 'Toad', id: '6'},
    {name: 'Bowser', id: '7'},
    
  ])
  

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => {
          return (            
            <Text style={styles.item}>{item.id}.{item.name}</Text>         
          )
        }}
      />


      {/* <ScrollView>
      {people.map((item, index, arrray) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.key}.{item.name}</Text>            
          </View>
        )
      })}
        <StatusBar style="auto" />      
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },  
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'yellow',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop:24

 }
});
