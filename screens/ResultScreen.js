import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { QuizContext } from '../components/QuizContext';
import StarRating from '../components/StarRating';
import styles from '../styles';

/**
 * ResultScreen Komponente
 * 
 * Eine Komponente, die die Ergebnisse eines Quizspiels anzeigt, einschließlich der erreichten Sterne und der durchschnittlichen Sterne pro Frage.
 * 
 * Props:
 * - route: Route-Objekt zum Empfangen von Parametern, z.B. totalStars, totalQuestions, und quizType.
 * - navigation: Navigation-Objekt zum Navigieren zwischen Bildschirmen.
 */

export default function ResultScreen({ route, navigation }) {
  const { totalStars, totalQuestions, quizType } = route.params;
  const averageStars = totalStars / totalQuestions;
  const { updateRating } = useContext(QuizContext);

  useEffect(() => {
    let isMounted = true;
    if (quizType && isMounted) {
      updateRating(quizType, averageStars);
    } else {
      console.error('quizType is undefined');
    }
    return () => {
      isMounted = false;
    };
  }, [averageStars, quizType, updateRating]);

  return (
    <View style={styles.resultContainer}>
      <View style={styles.resultImageContainer}>
        <Image source={require('../assets/QuizEndeSuperEule.png')} style={styles.resultImage} />
      </View>
      <View style={styles.starContainer2}>
        <StarRating stars={averageStars} maxStars={3} />
      </View>
      <Text style={styles.resultText}>
        Du hast insgesamt {totalStars} Sterne erreicht.
      </Text>
      <Text style={styles.resultText}>
        Durchschnittliche Sterne pro Frage: {averageStars.toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.resultButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.resultButtonText}>Zurück zum Start</Text>
      </TouchableOpacity>
    </View>
  );
}
