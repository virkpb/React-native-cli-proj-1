import { Platform, StyleSheet, Linking, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'

export default function  () {
    function openWebsite(websiteLink: string){
            Linking.openURL(websiteLink)  
        }
    const contacts = [{
        uid: 1,
        name: 'sgpc_amritsar',
        platform: 'instagram.com',
        link: 'https://www.instagram.com/sgpc_amritsar/',
        image: 'https://instagram.fixc1-4.fna.fbcdn.net/v/t51.2885-19/403887319_3692410524371485_8831441985427786870_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fixc1-4.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QFvZK3kAYqvltWI2RVTTgedN9MqboGpP5kLkTyi2nHbmJNNT6OTtFYNvZnrOKP_l9S3bKNQFaTnwJQpn1x6byNr&_nc_ohc=cqTwPIn9TLMQ7kNvwEQEFUM&_nc_gid=MEoNMNcYphnjUbeSLQdLUQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfZSAgztyYt7Ic6Pc48x31JZnpS786yRL5INE1k4016Ndw&oe=68DF3AB2&_nc_sid=8b3546',
    },
    {
        uid: 2,
        name: 'Shiromani Gurdwara Parbandhak Committee(@SGPCAmritsar)',
        platform: 'X(Twitter).com',
        link: 'https://x.com/sgpcamritsar',
        image: 'https://yt3.googleusercontent.com/3U6oZLg2--hoChqjRwcs4t_2Yk0x91bdi6Nc9Aw_OMF5-MlEmundJgu7D6F7glP_y7UxScgF=s900-c-k-c0x00ffffff-no-rj',
    },
    {
        uid: 3,
        name: 'SGPC, Shre Amritsar',
        platform: 'youtube.com',
        link: 'https://www.youtube.com/c/SGPCAmritsar-official',
        image: 'https://yt3.googleusercontent.com/3U6oZLg2--hoChqjRwcs4t_2Yk0x91bdi6Nc9Aw_OMF5-MlEmundJgu7D6F7glP_y7UxScgF=s900-c-k-c0x00ffffff-no-rj',
    },
    {
        uid: 4,
        name: 'SGPC Amritsar',
        platform: 'teligram.me',
        link: 'https://t.me/sgpc_amritsar',
        image: 'https://instagram.fixc1-4.fna.fbcdn.net/v/t51.2885-19/403887319_3692410524371485_8831441985427786870_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fixc1-4.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QFvZK3kAYqvltWI2RVTTgedN9MqboGpP5kLkTyi2nHbmJNNT6OTtFYNvZnrOKP_l9S3bKNQFaTnwJQpn1x6byNr&_nc_ohc=cqTwPIn9TLMQ7kNvwEQEFUM&_nc_gid=MEoNMNcYphnjUbeSLQdLUQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfZSAgztyYt7Ic6Pc48x31JZnpS786yRL5INE1k4016Ndw&oe=68DF3AB2&_nc_sid=8b3546',
    }];
  return (
    <View>
      <Text style={styles.headingText}>Contctlist</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, platform, link, image}) => (
            <View key={uid} style={styles.Card}>
                    <TouchableOpacity
                        onPress={() => openWebsite(link)}
                    >
                        <View style={styles.userCard}>
                        <Image 
                            source={{
                                uri: image,
                            }}
                            style={styles.userImage}
                        /> 
                        <View>                 
                        <Text style={styles.userName}>{platform}</Text>
                        <Text style={styles.userStatus}>{name}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
            </View> 
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#8D3DAF',
        margin: 5,
        borderRadius: 10,
    },
    headingText: { 
      fontSize: 24, 
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    container: {
      padding: 4,
      margin: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    userStatus: {
        color: '#FFF',
        fontSize: 12,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 14,
    },
})