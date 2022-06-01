import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {VStack, Text, HStack, Box} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export const RecipeCard = ({recipe}) => {
  const linearGradientColor = '2E2E2E';
  return (
    <HStack justifyContent="center">
      <Box style={styles.card}>
        <ImageBackground
          source={{uri: recipe.image}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <VStack flex={1} justifyContent="flex-end">
            <LinearGradient
              colors={['00', '99'].map(o => `#${linearGradientColor}${o}`)}
              style={styles.informations}>
              <Text style={styles.recipeTitle} fontSize="2xl">
                {recipe.title}
              </Text>
              <Text style={styles.characteristicsPokemon} fontSize="lg">
                ELECTRICITE
              </Text>
            </LinearGradient>
          </VStack>
        </ImageBackground>
      </Box>
    </HStack>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    width: '100%',
    height: 200,
    backgroundColor: 'pink',
  },
  informations: {
    paddingBottom: 15,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  recipeTitle: {
    fontWeight: 'bold',
    color: '#F7F7F7',
  },
  characteristicsPokemon: {
    color: '#F7F7F7',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  bestShadowEver: {},
  underlined: {},
});
