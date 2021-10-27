import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import colors from "../consts/colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

// Main Stack Navigation
const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

// Favorites Stack Navigation
const Favorites = createStackNavigator();

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Favorites.Screen name="FavoritesTab" component={FavoritesScreen} />
      <Favorites.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

// Tab Navigation
const Tab = createMaterialBottomTabNavigator();

const MealsNavigationTab = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-restaurant"} size={25} color={color} />
          ),
          tabBarColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-star"} size={25} color={color} />
          ),
          tabBarColor: colors.accent,
        }}
      />
    </Tab.Navigator>
  );
};

// Filters Navigation
const FiltersNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

// Drawer Navigation
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: "white",
        drawerContentStyle: {
          backgroundColor: colors.opacityPrimary,
          paddingVertical: 25,
          paddingHorizontal: 10,
        },
      }}
    >
      <Drawer.Screen
        name="MealFavorites"
        component={MealsNavigationTab}
        options={{
          title: "Meals",
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigation}
        options={{}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
