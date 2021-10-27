import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButton
          iconName="ios-star"
          onPress={() => {
            console.log("Added to favorites");
          }}
        />
      ),
    });
  }, [props.navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}min</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#dfe4ea",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ced6e0",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailsScreen;
