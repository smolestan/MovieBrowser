import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Row = props => (
    <TouchableOpacity onPress={() => props.onPress(props.imdbID, props.Title)}>
      <View style={styles.row}>
        <Image source={{ uri: props.Poster }}
        style={{width: 50, height: 50}} />
        <View>
          <Text style={styles.title}>{props.Title}</Text>
          <Text style={styles.descr}>{props.Year} ({props.Type})</Text>
        </View>
      </View>
    </TouchableOpacity>
  )  

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: "row",
  },
  title: {
    paddingLeft: 5,
    fontWeight: "bold"
  },
  descr: {
    paddingLeft: 5
  }
})

export default Row