import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CatCard from '../components/CatCard';

import { data } from '../assets/data';

const HomeScreen = ({ navigation }) => {
  const onCardPress = item => {
    navigation.push('CatDetails', {
      cat: item,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
