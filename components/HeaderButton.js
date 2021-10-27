import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.icon}>
        <Ionicons name={props.iconName} size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default HeaderButton;
