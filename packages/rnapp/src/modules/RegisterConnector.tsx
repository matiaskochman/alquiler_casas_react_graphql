import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Button } from 'react-native-elements';

const onPress1 = () : any => {
  console.log('onpress');
}

const RegisterConnector = () => {
  return (
    <SafeAreaView>
      <Button title="Button" onPress={onPress1} />
    </SafeAreaView>
  )
}

export default RegisterConnector;

const styles = StyleSheet.create({})
