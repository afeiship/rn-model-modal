/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Modal, 
  Text,
  Button,
  View
} from 'react-native';

import Modal2 from 'react-native-modal';
import Modal3 from  'react-native-modalbox';

export default class RnModal extends Component {

  state = {
    modalVisible: false,
    isModalVisible: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _showModal = () => this.setState({ isModalVisible: true })
  
  _hideModal = () => this.setState({ isModalVisible: false })

  _onPress3 = () => {
    this.refs.md3.open();
  };
  

  _onPress4 = () => {
    this.refs.md3.close();
  };
  


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <View style={{ height:300 }}>
          <TouchableOpacity onPress={this._showModal}>
            <Text>Show Modal2</Text>
          </TouchableOpacity>
          <Modal2 isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor:'#fff'}}>
              <Text>Hello!</Text>
              <Button title="close model2" onPress={this._hideModal} />
            </View>
          </Modal2>
        </View>

        <Button title="show model3[Recommand!!!]" onPress={this._onPress3} />


        <Modal3 style={{ height:400}} backdrop={true} coverScreen={false}  position={"bottom"} ref={"md3"}>
          <Text style={{ padding:40 }}>Modal on top[Recommand!!!]</Text>
          <Button title="close modal" onPress={this._onPress4} />
        </Modal3>

        <Modal
          animationType="slide"
          presentationStyle="overFullScreen"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
        <View style={{backgroundColor:'#f00',borderWidth:10 ,position:'absolute',bottom:0,width:'100%', borderColor:'#000'}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight style={{ padding:20 }} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{ color:'#fff'}}>Hide RN Modal</Text>
            </TouchableHighlight>

          </View>
        </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={{ padding: 10, backgroundColor:'#eee', color:"#333" }}>Show RN Modal</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RnModal', () => RnModal);
