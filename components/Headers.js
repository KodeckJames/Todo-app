import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const Headers = () => {
  return (
      <View style={styles.header}>
          <Text style={styles.title}>My Todos</Text>
      </View>
  )
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'purple'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Headers