import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('James')
  const [person, setPerson] = useState({name: 'Mario', age: 40})

  const clickHandler = () => {
    setName('Kwamzy')
    setPerson({name: 'Luigi', age: 50})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and I am {person.age} Years old</Text>
      <View style={styles.buttonContainer}><Button title='update state' onPress={clickHandler}/></View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  buttonContainer: {
    marginTop: 20
  }
});
