import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [props.navigation]);

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters ❓</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
