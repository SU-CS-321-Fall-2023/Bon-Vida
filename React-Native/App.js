import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PackageList from "./pages/packagesList";
import Package from "./pages/package";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Chatbot from "./pages/Chat";
import CprNav from "./pages/cpr";

const Stack = createStackNavigator();

const App = () => {
  const [agree, setAgree] = useState(false);

  const handlePress = () => {
    setAgree(true);
  };

  return (
    <NavigationContainer>
      {!agree ? (
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.disclaimerText}>
              PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING THIS APP. This
              app is designed to provide general guidance on basic life support
              and first aid procedures. While we strive to offer accurate and
              up-to-date information, there are inherent risks and variables in
              any medical or emergency situation. As such, the recommendations
              and guidance provided within this app should not replace
              professional medical advice, diagnosis, or treatment. Users should
              always consult with appropriate medical professionals in
              emergencies and for specific health-related guidance. By using
              this app, you understand and agree that: The guidance provided is
              for informational purposes only and does not constitute
              professional medical advice. You assume all risks associated with
              the use of the information provided within this app. We, along
              with our affiliates, partners, and developers, are not responsible
              for any direct, indirect, incidental, consequential, special, or
              exemplary damages, including but not limited to, damages for loss
              of profits, goodwill, use, data, or other intangible losses,
              resulting from the use or inability to use the information
              provided within this app. You are solely responsible for any
              actions or decisions you make based on the information provided
              within this app. IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT,
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
              DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF
              PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING
              OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS APP.
              We strongly recommend attending certified first aid and basic life
              support training to better equip yourself for emergencies. By
              continuing to use this app, you acknowledge that you have read,
              understood, and agree to this disclaimer. You should have a legal
              professional review this disclaimer to ensure it is appropriate
              and comprehensive for your specific jurisdiction and situation.
            </Text>
            <TouchableOpacity style={styles.agreeButton} onPress={handlePress}>
              <Text style={styles.buttonText}>I agree</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <Stack.Navigator initialRouteName="PackageList">
          <Stack.Screen name="PackageList" component={PackageList} />
          <Stack.Screen name="Package" component={Package} />
          <Stack.Screen name="Chat" component={Chatbot} />
          <Stack.Screen name="CPR" component={CprNav} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  disclaimerText: {
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    lineHeight: 24,
    color: "#333",
  },
  agreeButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
