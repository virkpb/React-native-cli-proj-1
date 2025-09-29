import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: { 
    fontSize: 24, 
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 100,
    borderRadius: 10,
    margin: 4,
  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#53ef94ff'
  },
  cardThree: {
    backgroundColor: '#5DA3FA'
  },
  cardFour: {
    backgroundColor: '#dcdc4bff'
  },
})