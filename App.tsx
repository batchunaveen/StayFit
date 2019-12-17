import React from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text,TouchableOpacity, TextStyle, View, ViewStyle } from 'react-native';



class MyButton extends React.Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    return React.createElement(View, _extends({
      ref: component => this._root = component
    }, this.props), React.createElement(Text, null, this.props.label));
  }

}


export default function App() {
  return React.createElement(View, {style: headerStyles.container}, 
  React.createElement(Header, {
  placement: "center",
  leftComponent: {
    icon: 'menu',
    color: '#fff'
  },
  centerComponent: {
    text: 'StayFit',
    style: {
      color: '#fff'
    }
  },
  rightComponent: {
    icon: 'home',
    color: '#fff'
  }}));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});

const headerStyles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
