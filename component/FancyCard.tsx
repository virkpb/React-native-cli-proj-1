import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://cdn.pixabay.com/photo/2017/10/08/17/45/india-2830745_1280.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Golden Temple</Text>
            <Text style={styles.cardLabel}>The Holy City of Sikh, Amritsat</Text>
            <Text style={styles.cardDiscription}>The real name is Sri Harmandir Sahib (ਹਰਿਮੰਦਰ ਸਾਹਿਬ) in punjabi some also say it  Darbar Sahib (ਦਰਬਾਰ ਸਾਹਿਬ)</Text>
            <Text style={styles.cardFotter}>The real info is down below</Text>  
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
    card: {
      width: 350,
      height: 360,
      borderRadius: 10,
      margin: 5,
    },
    cardElevated: {
      backgroundColor: '#ddcdaaff',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    cardImage: {
        height: 150,
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    cardLabel: {
      color: '#000000',
      fontSize: 16,
      marginBottom: 6,
    },
    cardDiscription: {
      color: '#242B2E',
      fontSize: 14,
      marginBottom: 10,
      marginTop: 6,
      flexShrink: 1,
    },
    cardFotter: {
      color: '#000000',
    },
})