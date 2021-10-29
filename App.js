import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class JOMobileApp extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://app.staging.jillsoffice.com/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default JOMobileApp;
