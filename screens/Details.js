import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import { ImageBackground } from "react-native-web";


export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      imagePath: "",
      url: ``
    };
  }

  componentDidMount() {
      //chame a função getDetails aqui para que os dados sejam buscados assim que a tela for montada
      this.getDetails
  }
  getDetails = () => {
      //escreva o código para buscar os dados do planeta específico da API
      const{url}=this.state  
      axios
      .get(url)
      .then(response=>{
          this.setDetails(response.data.data)
      })
      .catch((error)=>{
        Alert.alert(error.message)
      })
    };
  /*esta função irá determinar o estado imagePath dependendo do planetType*/
  setDetails = (planetDetails) => {
    const planetType = planetDetails.planet_type;
    let imagePath = "";
    switch (planetType) {
      case "Gas Giant":
        imagePath = require("../assets/Gas_Giant.png");
        break;
      case "Terrestrial":
        imagePath = require("../assets/Terrestrial.png");
        break;
      case "Super Earth":
        imagePath = require("../assets/Super_Earth.png");
        break;
      case "Neptune Like":
        imagePath = require("../assets/Neptune-like.png");
        break;
      default:
        imagePath = require("../assets/Gas_Giant.png");
    }

  this.setState({
    details: planetDetails,
    imagePath: imagePath,
  });
};
  render() {
    const{details,imagePath}=this.state
    if(details.specifications){
      return(
        <View style={styles.container}>
          <ImageBackground style={{flex:1,paddingTop:20}} source={require("../assets/bg.png")}>
          </ImageBackground>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});
