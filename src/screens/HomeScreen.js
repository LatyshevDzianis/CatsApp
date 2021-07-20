import React, {useState, useMemo} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import CatCard from '../components/CatCard';
import {contains} from '../helpers/helpers';
import {data} from '../assets/data';

const HomeScreen = ({navigation}) => {
  const [cats, setCats] = useState(data);
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

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
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <FlatList
        data={cats}
        renderItem={({item}) => (
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
        keyExtractor={({id}) => id}
        extraData={cats}
      />
      <TextInput
        textAlign="center"
        placeholder="Type here to search..."
        onChangeText={handleChangeText}
        clearButtonMode="always"
        style={styles.input}
        placeholderTextColor={theme.colors.black}
      />
    </KeyboardAvoidingView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      marginVertical: 10,
      marginHorizontal: 20,
    },
    input: {
      color: theme.colors.black,
    },
  });

export default HomeScreen;
