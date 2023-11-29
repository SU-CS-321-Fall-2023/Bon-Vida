import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

export default function Chatbot() {
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);
  const [fullAnswer, setFullAnswer] = useState(null);
  const [showFullAnswer, setShowFullAnswer] = useState(false);

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
    setFullAnswer(null);

    try {
      const response = await axios.get(
        `http://localhost:8080/answer?data=${question}`
      );
      const [receivedAnswer, receivedFullAnswer] = response.data;
      // Handle the response from the Flask back end
      setAnswer(receivedAnswer);
      setFullAnswer(receivedFullAnswer);
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

  const handlePress = () => {
    setShowFullAnswer(!showFullAnswer);
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
          <TouchableOpacity onPress={handlePress} style={styles.expandButton}>
            <Text style={styles.expandButtonText}>
              {showFullAnswer ? "Collapse ⬆️" : "Expand ⬇️"}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <View />
      )}
      {showFullAnswer ? (
        <Animated.View style={{ ...styles.answerContainer, opacity: fadeAnim }}>
          <Text style={styles.answerText}>{fullAnswer}</Text>
        </Animated.View>
      ) : (
        <View />
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
  expandButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#3498db",
    borderRadius: 5,
    alignItems: "center",
  },
  expandButtonText: {
    color: "#fff",
  },
});
