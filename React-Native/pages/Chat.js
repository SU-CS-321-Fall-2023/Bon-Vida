import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function Chatbot() {
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleEntry = async () => {
    setAnswer(null);
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/answer?data=${question}`
      );
      // Handle the response from the Flask back end
      setAnswer(response.data);
      fadeIn(); // Trigger fade in when the answer is received
    } catch (error) {
      // Handle any errors
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (text) => {
    setQuestion(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask a question"
        onChangeText={handleInputChange}
        onSubmitEditing={handleEntry}
      />
      {loading && (
        <View>
          <Text>Generating answer...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {answer ? (
        <Animated.View style={{ ...styles.answerContainer, opacity: fadeAnim }}>
          <Text style={styles.answerText}>{answer}</Text>
        </Animated.View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: "100%",
  },
  answerContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
});
