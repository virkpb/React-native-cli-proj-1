import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './component/FlatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App new one</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard/>
        <ContactList />
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App