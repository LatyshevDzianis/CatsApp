import React, { useMemo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const CatCard = ({ name, breed, imageUri, description, onPress }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.headerSection}>
        <Text style={[styles.text, styles.boldText]}>{name}</Text>
        <Text style={styles.text}>{breed}</Text>
      </View>
      <View style={styles.imageSection}>
        <FastImage
          style={styles.image}
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

const createStyles = theme =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.colors.almostBlue,
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
      borderBottomColor: theme.colors.almostBlue,
      paddingBottom: 5,
    },
    imageSection: {
      alignItems: 'center',
      padding: 15,
    },
    image: {
      width: '90%',
      height: 150,
    },
  });

export default CatCard;
