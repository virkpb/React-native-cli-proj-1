import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)  
    }
  return (
    <View>
      <Text style={styles.headingText}>The Sikhs</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>This is holy city of sikhs</Text>
        </View>
        <Image 
        source={{
            uri: 'https://cdn.pixabay.com/photo/2022/10/07/16/10/golden-temple-7505424_1280.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                    Harmandir Sahib translates to "the abode of God". 
                    It is the most sacred religious site for Sikhs. 
                    The temple is situated in the city of Amritsar, Punjab, India. 
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://pa.wikipedia.org/wiki/%E0%A8%B9%E0%A8%B0%E0%A8%BF%E0%A8%AE%E0%A9%B0%E0%A8%A6%E0%A8%B0_%E0%A8%B8%E0%A8%BE%E0%A8%B9%E0%A8%BF%E0%A8%AC')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => openWebsite('https://pa.wikipedia.org/wiki/%E0%A8%B9%E0%A8%B0%E0%A8%BF%E0%A8%AE%E0%A9%B0%E0%A8%A6%E0%A8%B0_%E0%A8%B8%E0%A8%BE%E0%A8%B9%E0%A8%BF%E0%A8%AC')}
            >
                <Text style={styles.socialLinks}>From SGPC</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 8
    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 10,
      margin: 5,
    },
    elevatedCard: {
      backgroundColor: '#ddcdaaff',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 10,
    },
})