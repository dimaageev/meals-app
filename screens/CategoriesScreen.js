import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridItem from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Meal Categories",
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

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
