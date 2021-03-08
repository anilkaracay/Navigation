import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default class AboutModal extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'purple',fontSize:45}}>About modal</Text>
        <TouchableOpacity onPress={()=> goBack()}>
          <Text>Geri dön</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
