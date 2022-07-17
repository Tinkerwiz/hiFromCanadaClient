import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 15, paddingHorizontal: 15 }}>
            Hi from Canada, %username 👋
        </Text>
      </View>
    );
  }

export default HomeScreen;
