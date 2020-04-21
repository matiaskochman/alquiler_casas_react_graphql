import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo';
import { Routes } from './routes';

const index = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default index

const styles = StyleSheet.create({})
