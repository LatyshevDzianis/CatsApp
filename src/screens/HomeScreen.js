import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';

import CatCard from '../components/CatCard';

import { data } from '../assets/data';

const contains = ({ name, breed, description }, text) => {
  const query = text.toLowerCase();

  if (
    name.toLowerCase().includes(query) ||
    breed.toLowerCase().includes(query) ||
    description.toLowerCase().includes(query)
  ) {
    return true;
  }
  return false;
};

const HomeScreen = ({ navigation }) => {
  const [cats, setCats] = useState(data);

  const onCardPress = item => {
    navigation.push('CatDetails', {
      cat: item,
    });
  };

  const handleChangeText = text => {
    const newCats = data.filter(cat => contains(cat, text));
    setCats(newCats);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cats}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CatCard
              name={item.name}
              breed={item.breed}
              imageUri={item.imageUri}
              description={item.description}
              onPress={() => onCardPress(item)}
            />
          </View>
        )}
        keyExtractor={({ id }) => id}
        extraData={cats}
      />
      <TextInput
        textAlign="center"
        placeholder="Type here to search..."
        onChangeText={handleChangeText}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default HomeScreen;
