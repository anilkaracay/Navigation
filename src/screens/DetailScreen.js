import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("text", "Detail"),
    };
  };

  render() {
    const { navigate, push, goBack, getParam } = this.props.navigation;
    const text = getParam("text", "Default Title");
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>{text}</Text>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Text style={{ color: "green" }}>
            go to home page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
