import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

/**
 * StarRating Komponente
 * 
 * Eine Komponente, die eine Sternebewertung anzeigt. Die Anzahl der vollen und teilweisen Sterne basiert auf der übergebenen Bewertung.
 * 
 * Props:
 * - stars: Die Anzahl der Sterne als Dezimalzahl, z.B. 2.5 für zweieinhalb Sterne.
 * - maxStars: Die maximale Anzahl der Sterne (Standard ist 3).
 */

const StarRating = ({ stars, maxStars = 3 }) => {
  const starElements = [];
  const fullStars = Math.floor(stars);
  const fraction = stars - fullStars;

  const getStarImage = (index) => {
    if (index < fullStars) {
      return require('../assets/star_full.png');
    }
    if (index === fullStars) {
      if (fraction >= 0.8) {
        return require('../assets/star_80.png');
      } else if (fraction >= 0.6) {
        return require('../assets/star_50.png');
      } else if (fraction >= 0.4) {
        return require('../assets/star_40.png');
      } else if (fraction >= 0.2) {
        return require('../assets/star_20.png');
      }
    }
    return require('../assets/star_empty.png');
  };

  for (let i = 0; i < maxStars; i++) {
    starElements.push(
      <Image key={`star-${i}`} source={getStarImage(i)} style={styles.star} />
    );
  }

  return <View style={styles.starContainer}>{starElements}</View>;
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  star: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
  },
});

export default StarRating;
