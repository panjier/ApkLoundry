import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const Pesanan = () => {
  return (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
    </Button>
  )
}

export default Pesanan

const styles = StyleSheet.create({})