import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const catsDescriptionItems = ['breed', 'age', 'description'];

const makeFirstLetterUpper = str => str.charAt(0).toUpperCase() + str.slice(1);

const DetailsScreen = ({ route }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const cat = route.params.cat;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: cat.imageUri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.infoContainer}>
        {catsDescriptionItems.map(descriptionItem => (
          <View style={styles.descriptionSectionItem} key={descriptionItem}>
            <Text style={[styles.text, styles.boldText]}>
              {makeFirstLetterUpper(descriptionItem)}:
            </Text>
            <Text style={styles.text}>{cat[descriptionItem]}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    imageContainer: {
      marginBottom: 20,
      borderBottomColor: theme.colors.lightGrey,
    },
    image: {
      width: '100%',
      height: 250,
    },
    infoContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.lightGrey,
      paddingVertical: 5,
    },
    descriptionSectionItem: {
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
    },
    boldText: {
      fontWeight: 'bold',
    },
  });

export default DetailsScreen;
