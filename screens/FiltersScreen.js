import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";
import colors from "../consts/colors";
import { LogBox } from "react-native";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ false: "#a4b0be", true: "#8c7ae6" }}
        thumbColor={colors.primary}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = React.useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  React.useEffect(() => {
    props.navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters, props.navigation]);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Filter Meals",
      headerLeft: () => (
        <HeaderButton
          iconName="ios-menu-outline"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      ),
      headerRight: () => (
        <View style={styles.saveButton}>
          <HeaderButton
            iconName="ios-save-outline"
            onPress={() => props.route.params.save()}
          />
        </View>
      ),
    });
  }, [props.navigation, props.route.params]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  saveButton: {
    marginHorizontal: 35,
  },
});

export default FiltersScreen;
