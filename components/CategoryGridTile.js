import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGridItem = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <TouchableComponent style={styles.gridItem} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 15,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.37,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    shadowRadius: 7.49,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default CategoryGridItem;
