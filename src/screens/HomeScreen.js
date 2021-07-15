import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CatCard from '../components/CatCard';

import { data } from '../assets/data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item: { name, breed, imageUri, description } }) => (
          <View style={{ marginBottom: 15 }}>
            <CatCard
              name={name}
              breed={breed}
              imageUri={imageUri}
              description={description}
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
    padding: 15,
  },
});

export default HomeScreen;
