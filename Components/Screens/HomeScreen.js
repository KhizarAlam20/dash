import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {s} from 'react-native-wind'


// HomeScreen component
const HomeScreen = () => {
  // Function to handle search icon click
  const handleSearchClick = () => {
    console.log("Search icon clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text 
      className="text-red-400 text-xl"
      >Dash</Text>

      <View style={styles.searchContainer}>
        <TouchableOpacity
          activeOpacity={0.6} // Opacity effect when pressed
          onPress={handleSearchClick}
        >
          <Ionicons name="search" size={20} color="#666" style={styles.icon} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search item"
          placeholderTextColor="#aaa"
        />
      </View>

<View style={s` ml-20 flex flex-row flex-wrap`}>
      <View
        style={[s`mt-1 bg-blue-500 rounded-xl w-40 h-40`, { elevation: 3 }]}
      >
        <Text>hi</Text>
      </View>

      <View
        style={[s`mt-1 bg-blue-500 rounded-xl w-40 h-40`, { elevation: 3 }]}
      >
        <Text>hi</Text>
      </View>

      <View
        style={[s`mt-1 bg-blue-500 rounded-xl w-40 h-40`, { elevation: 3 }]}
      >
        <Text>hi</Text>
      </View>

      <View
        style={[s`mt-1 bg-blue-500 rounded-xl w-40 h-40`, { elevation: 3 }]}
      >
        <Text>hi</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

// Styles outside the component to keep the code clean and organized
const styles = {
  container: [
    s`justify-center items-center mt-14`,
    { backgroundColor: "#f2f2f2" },
  ],
  title: [s`text-red-400 text-xl`, { fontFamily: "Poppins-Bold" }],
  searchContainer: s`
    flex-row items-center 
    bg-Highlight pt-4 pl-3 pb-4 
    rounded-xl mt-10 shadow-md 
    ml-8 mr-8
  `,
  icon: s`mr-3 ml-3`,
  input: [s`flex-1 text-base text-gray-700`, { fontFamily: "Poppins-Medium" }],
};

export default HomeScreen;
