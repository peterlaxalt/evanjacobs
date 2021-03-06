import React from 'react';
import { StyleSheet, View, Text, WebView, Dimensions, Linking } from 'react-native';
import { textFont, hyperLinkTextFont } from './TextConstants.js';

// Fleauxzangui Variables //

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 300
  },

  videoWeb: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    height: 200,
    width: Dimensions.get('window').width,
    padding: 5
  }
});

// Fleauxzangui Description & SoundCloud Audio Player Component //

export default class FleauxzanguiComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={textFont.fontStyle}>Evan co-produced and sang on the track
          <Text style={hyperLinkTextFont.fontStyle} onPress={() => Linking.openURL('https://soundcloud.com/big-chocolate/fleauxzangui')}> Fleauxzangui (ft. Evan Jacobs) by Big Chocolate</Text>
        </Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.videoWeb}
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{uri: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/300770769&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'}} />
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
      </View>
    );
  }
};
