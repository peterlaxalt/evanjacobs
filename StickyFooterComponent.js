import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Linking } from 'react-native';

/* Variables */

const stickyFooter = StyleSheet.create({
  container: {
    height: 41,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'cornflowerblue'
  }
});

/* Sticky Footer Component */

export default class StickyFooter extends React.Component {
  render() {
    return (
      <View stlye={stickyFooter.container}>

      </View>
    );
  }
}

export { stickyFooter };
