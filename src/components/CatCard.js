import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const CatCard = ({ name, breed, imageUri, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.headerSection}>
        <Text style={[styles.text, styles.boldText]}>{name}</Text>
        <Text style={styles.text}>{breed}</Text>
      </View>
      <View style={styles.imageSection}>
        <FastImage
          style={{ width: '90%', height: 150 }}
          source={{
            uri: imageUri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View>
        <Text numberOfLines={2} style={styles.text}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#487eb0',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#487eb0',
    paddingBottom: 5,
  },
  imageSection: {
    alignItems: 'center',
    padding: 15,
  },
});

export default CatCard;
