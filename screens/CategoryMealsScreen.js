import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [props.navigation]);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
