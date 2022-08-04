import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Slider = (props) => {
  return (
    <View style={styles.data}>
      <Image
        source={props.item.image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.description}>{props.item.description}</Text>
    </View>
  );
};

export default Slider;
