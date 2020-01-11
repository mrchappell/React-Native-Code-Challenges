import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PricingCard } from 'react-native-elements';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <PricingCard
         color="#4f9deb"
         title="REGNAcon! Visitor Pass"
         price="$40"
         info={['Admit 1', 'Standard 1-day pass', 'One Autograph']}
         button={{ title: 'Start Order', icon: 'arrow-right'}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
