import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.route.params.mealId;

  const availableMeals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  React.useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [props.navigation, toggleFavoriteHandler]);

  React.useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsFavorite,
    });
  }, [props.navigation, currentMealIsFavorite]);

  React.useLayoutEffect(() => {
    const toggleFavorites = props.route.params.toggleFav;
    const isFavorite = props.route.params.isFav;

    props.navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButton
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorites}
        />
      ),
    });
  }, [props.navigation, props.route.params]);

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
