import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, Image } from 'react-native';
import styles from '../styles';


/**
 * ComparisonQuiz Komponente
 * 
 * Eine Komponente, die ein Quiz rendert, bei dem Benutzer eine Vergleichsoption für eine gegebene Frage auswählen.
 * 
 * Props:
 * - question: Objekt, das die Frage und ihre Details enthält.
 * - comparisonAnswer: Die aktuell ausgewählte Vergleichsantwort.
 * - setComparisonAnswer: Funktion zum Aktualisieren der ausgewählten Vergleichsantwort.
 * - animatedValues: Array von Animated.ValueXY Objekten zur Handhabung der Button-Animationen.
 * - comparisonAnswerRef: Ref-Objekt für den Container der Vergleichsantwort.
 * - buttonRefs: Ref-Objekt für die Options-Buttons.
 */

const ComparisonQuiz = ({ question, comparisonAnswer, setComparisonAnswer, animatedValues, comparisonAnswerRef, buttonRefs }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    animatedValues.forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });
    setCurrentOptionIndex(null);
    setComparisonAnswer(null);
  }, [question]);

  const handleOptionSelect = (option, index) => {
    if (isAnimating) return; 

    if (currentOptionIndex === index) {
      setIsAnimating(true); 
      Animated.timing(animatedValues[currentOptionIndex], {
        toValue: { x: 0, y: 0 },
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setCurrentOptionIndex(null);
        setComparisonAnswer(null);
        setIsAnimating(false); 
      });
    } else if (currentOptionIndex !== null && currentOptionIndex !== index) {
      setIsAnimating(true); 
      Animated.timing(animatedValues[currentOptionIndex], {
        toValue: { x: 0, y: 0 },
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setCurrentOptionIndex(index);
        setComparisonAnswer(option);
        animateSelectedOption(option, index);
      });
    } else {
      setCurrentOptionIndex(index);
      setComparisonAnswer(option);
      animateSelectedOption(option, index);
    }
  };

  const animateSelectedOption = (option, index) => {
    setIsAnimating(true); 
   
    buttonRefs.current[index].measure((fx, fy, width, height, px, py) => {
      comparisonAnswerRef.current.measure((fx2, fy2, width2, height2, px2, py2) => {
        const offsetX = px2 - px;
        const offsetY = py2 - py;

        Animated.timing(animatedValues[index], {
          toValue: { x: offsetX, y: offsetY },
          duration: 200,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          setIsAnimating(false); 
        });
      });
    });
  };

  return (
    <View>
      <View style={styles.questionContainer}>
        <Image source={require('../assets/FrageEuleVergleichszeichen.png')} style={styles.questionImage} />
      </View>
      <View style={styles.comparisonQuestion}>
        <Text style={styles.comparisonText}>{question.leftSide}</Text>
        <View ref={comparisonAnswerRef} style={styles.comparisonAnswerContainer}>
          <Text style={[styles.comparisonAnswerText, { opacity: 0 }]}>{comparisonAnswer || ' '}</Text>
        </View>
        <Text style={styles.comparisonText}>{question.rightSide}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleOptionSelect(option, index)}>
            <Animated.View
              ref={(ref) => (buttonRefs.current[index] = ref)}
              style={[
                styles.optionButton,
                comparisonAnswer === option && styles.selectedOptionButton,
                { transform: animatedValues[index].getTranslateTransform() },
              ]}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ComparisonQuiz;