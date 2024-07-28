import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { QuizContext } from '../components/QuizContext';
import styles from '../styles';
import StarRating from '../components/StarRating';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';

/**
 * HomeScreen Komponente
 * 
 * Eine Komponente, die den Startbildschirm der App darstellt und die Benutzer zu verschiedenen Quiztypen navigieren lässt.
 * 
 * Zurücksetzen der Ratings kann mit dem halten von 5 Fingern auf dem Bildschirm erfolgen. 
 * 
 * Props:
 * - navigation: Navigation-Objekt zum Navigieren zwischen Bildschirmen.
 */

export default function HomeScreen({ navigation }) {
  const { ratings, updateRating } = useContext(QuizContext);
  const timeoutRef = useRef(null);

  const fiveFingerGesture = Gesture.Manual()
    .onTouchesDown((event, state) => {
      if (event.numberOfTouches === 5) {
        timeoutRef.current = setTimeout(() => {
          if (event.numberOfTouches === 5) {
            Alert.alert(
              'Bestätigung erforderlich',
              'Möchten Sie wirklich die Bewertungen zurücksetzen?',
              [
                {
                  text: 'Abbrechen',
                  style: 'cancel',
                },
                {
                  text: 'Bestätigen',
                  onPress: resetRatings,
                },
              ],
              { cancelable: false }
            );
          }
        }, 2000); 
      }
    })
    .onTouchesUp(() => {
      clearTimeout(timeoutRef.current);
    })
    .onTouchesMove((event, state) => {
      if (event.numberOfTouches !== 5) {
        clearTimeout(timeoutRef.current);
      }
    });

  useEffect(() => {
    const loadRatings = async () => {
    };

    loadRatings();
  }, []);

  const resetProgress = async () => {
    try {
      await AsyncStorage.removeItem('@sequence_currentQuestionIndex');
      await AsyncStorage.removeItem('@comparison_currentQuestionIndex');
      await AsyncStorage.removeItem('@fillIn_currentQuestionIndex');
      await AsyncStorage.removeItem('@unitConversion_currentQuestionIndex');
      await AsyncStorage.removeItem('@order_currentQuestionIndex');
      await AsyncStorage.removeItem('@schedule_currentQuestionIndex');
      await AsyncStorage.removeItem('@sequence_questionStars');
      await AsyncStorage.removeItem('@comparison_questionStars');
      await AsyncStorage.removeItem('@fillIn_questionStars');
      await AsyncStorage.removeItem('@unitConversion_questionStars');
      await AsyncStorage.removeItem('@order_questionStars');
      await AsyncStorage.removeItem('@schedule_questionStars');
    } catch (e) {
      console.error('Failed to reset progress', e);
    }
  };

  const resetRatings = async () => {
    updateRating('sequence', 0);
    updateRating('comparison', 0);
    updateRating('fillIn', 0);
    updateRating('unitConversion', 0);
    updateRating('order', 0);
    updateRating('schedule', 0);
    await resetProgress();
  };

  const renderQuizButton = (quizType, description, exampleTask) => (
    <TouchableOpacity 
      style={styles.quizButton} 
      onPress={() => navigation.navigate('Quiz', { quizType })}
    >
      <View style={styles.quizButtonContent}>
        <Text style={styles.quizButtonText}>{description}</Text>
        <View style={styles.exampleTaskContainer}>
          <Text style={styles.exampleTaskText}>{exampleTask}</Text>
        </View>
        <View style={styles.starContainer}>
          <StarRating stars={ratings[quizType]} maxStars={3} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={fiveFingerGesture}>
        <View style={styles.container}>
          <Image source={require('../assets/BegrueßungsEule.png')} style={styles.cartoonImage} />
          <Text style={styles.greetingText}></Text>
          <View style={styles.quizGrid}>
            {renderQuizButton(
              'sequence', 
              'Zahlen-/Buchstabenreihen',  
              '1, 2, 3, _'
            )}
            {renderQuizButton(
              'comparison', 
              'Anzahlen vergleichen', 
              '5 > 3'
            )}
            {renderQuizButton(
              'fillIn', 
              'Lücken füllen', 
              '26 + ? = 73'
            )}
            {renderQuizButton(
              'unitConversion', 
              'Einheiten umrechnen', 
              '100 cm = 1 m'
            )}
            {renderQuizButton(
              'order', 
              'Der Größe nach ordnen', 
              '1, 3, 2, 4'
            )}
            {renderQuizButton(
              'schedule', 
              'Sachaufgaben', 
              'Wann fährt der Zug?'
            )}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
