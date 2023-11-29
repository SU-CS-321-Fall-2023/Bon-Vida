import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, TextInput, StyleSheet } from "react-native";
import AccordionItem from "../components/Accordion";
import axios from "axios";

const Home = () => {
  const [injuries, setInjuries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInjuries, setFilteredInjuries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/injuries");
        setInjuries(response.data);
        setFilteredInjuries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredItems = injuries.filter(
      (item) =>
        item.injury.toLowerCase().includes(query.toLowerCase()) ||
        item.Dos.some((d) => d.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredInjuries(filteredItems);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredInjuries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <AccordionItem key={index} title={item.injury} data={item.Dos} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    paddingLeft: 10,
  },
});

export default Home;
