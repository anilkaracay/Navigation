import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class TitleLogo extends Component {
  render() {
    return (
      <Image
        source={require("../assets/header-icon.svg")}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      HeaderTitleLogo: <TitleLogo />,
      headerTransparent: true,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Modal')}
                          style={{ marginRight: 10 }}>
          <Text style={{ color: "red" }}>About</Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40}}>Home</Text>
        <TouchableOpacity onPress={() => navigate("Detail", {
          text: "Kadıköyde yangın",
        })}>
          <Text style={{ color: "green",fontSize:36 }}>
            haber1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Detail", {
            text: "galatasaray 2-2 sivas",
          },
        )}>
          <Text style={{ color: "green",fontSize:36 }}>
            haber2
          </Text>
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
