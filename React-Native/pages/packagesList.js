import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PackageList = () => {
  const navigation = useNavigation();

  // Sample data for the list of packages
  const packages = [
    { id: 1, name: "Outdoors" },
    { id: 2, name: "Indoors" },
    { id: 3, name: "Chronic Diseases" },
    // Add more packages as needed
  ];

  // Function to handle package click
  const handlePackageClick = (packageId) => {
    // Navigate to a different screen when a package is clicked
    navigation.navigate("Package", { packageId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {packages.map((packageItem) => (
            <TouchableOpacity
              key={packageItem.id}
              onPress={() => handlePackageClick(packageItem.id)}
              style={styles.packageItem}
            >
              <Text style={styles.packageText}>{packageItem.name}</Text>
              <Button
                title="Download"
                onPress={() =>
                  console.log(`Download button pressed for ${packageItem.name}`)
                }
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomButtons}>
        <Button title="CPR" onPress={() => navigation.navigate("CPR")} />
        <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  packageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  packageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default PackageList;
