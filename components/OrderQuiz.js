import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../styles';
import { Image } from 'react-native';

/**
 * OrderQuiz Komponente
 * 
 * Eine Komponente, die ein Quiz rendert, bei dem Benutzer Optionen in die richtige Reihenfolge bringen müssen.
 * 
 * Props:
 * - question: Objekt, das die Frage und ihre Details enthält.
 * - selectedOptions: Array der aktuell ausgewählten Optionen.
 * - setSelectedOptions: Funktion zum Aktualisieren der ausgewählten Optionen.
 * - animatedValues: Array von Animated.ValueXY Objekten zur Handhabung der Button-Animationen.
 * - buttonRefs: Ref-Objekt für die Options-Buttons.
 */

const OrderQuiz = ({ question, selectedOptions, setSelectedOptions, animatedValues, buttonRefs }) => {
  const slotRefs = useRef([]).current;

  useEffect(() => {
    animatedValues.forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });
  }, [question]);

  const selectOption = (option, index) => {
    const slotIndex = selectedOptions.indexOf(option);
    if (slotIndex !== -1) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[slotIndex] = null;
      setSelectedOptions(newSelectedOptions);
      buttonRefs[index].measure((fx, fy, width, height, px, py) => {
        Animated.timing(animatedValues[index], {
          toValue: { x: 0, y: 0 },
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    } else {
      const emptyIndex = selectedOptions.findIndex(option => option === null);
      if (emptyIndex !== -1) {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[emptyIndex] = option;
        setSelectedOptions(newSelectedOptions);
        buttonRefs[index].measure((fx, fy, width, height, px, py) => {
          slotRefs[emptyIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
            Animated.timing(animatedValues[index], {
              toValue: { x: spx - px, y: spy - py },
              duration: 300,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start();
          });
        });
      }
    }
  };

  return (
    <View>
       <View style={styles.questionContainer}>
        <Image source={question.image} style={styles.questionImage} />
      </View>
      <View style={styles.answerSlots}>
        {question.correctAnswer.map((_, index) => (
          <View key={index} ref={ref => (slotRefs[index] = ref)} style={styles.answerSlot}>
            <Animated.Text style={[styles.answerSlotText, { opacity: 0 }]}>
              {selectedOptions[index]}
            </Animated.Text>
          </View>
        ))}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => selectOption(option, index)}>
            <Animated.View
              ref={ref => (buttonRefs[index] = ref)}
              style={[
                styles.optionButton,
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

export default OrderQuiz;