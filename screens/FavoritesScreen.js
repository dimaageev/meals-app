import React from "react";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderButton
          iconName="ios-menu-outline"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, [props.navigation]);

  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
