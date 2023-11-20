import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import AccordionItem from "../components/Accordion";
import axios from "axios";

const Home = () => {
  const [injuries, setInjuries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/injuries");
        setInjuries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={injuries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <AccordionItem key={index} title={item.injury} data={item.Dos} />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
