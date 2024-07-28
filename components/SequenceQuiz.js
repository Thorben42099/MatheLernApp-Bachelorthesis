import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../styles';
import { Image } from 'react-native';

/**
 * SequenceQuiz Komponente
 * 
 * Eine Komponente, die ein Quiz rendert, bei dem Benutzer Optionen in der richtigen Reihenfolge auswählen müssen.
 * 
 * Props:
 * - question: Objekt, das die Frage und ihre Details enthält.
 * - selectedOptions: Array der aktuell ausgewählten Optionen.
 * - setSelectedOptions: Funktion zum Aktualisieren der ausgewählten Optionen.
 * - animatedValues: Array von Animated.ValueXY Objekten zur Handhabung der Button-Animationen.
 * - buttonRefs: Ref-Objekt für die Options-Buttons.
 */

const SequenceQuiz = ({ question, selectedOptions, setSelectedOptions, animatedValues, buttonRefs }) => {
  const slotRefs = useRef([]).current;

  useEffect(() => {
    animatedValues.forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });

    while (slotRefs.length < question.correctAnswer.length) {
      slotRefs.push(React.createRef());
    }
    while (slotRefs.length > question.correctAnswer.length) {
      slotRefs.pop();
    }

    setSelectedOptions(Array(question.correctAnswer.length).fill(null));
  }, [question]);

  const selectOption = (option, optionIndex) => {
    const selectedOptionIndex = selectedOptions.findIndex(
      selectedOption => selectedOption?.value === option && selectedOption?.index === optionIndex
    );

    if (selectedOptionIndex !== -1) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[selectedOptionIndex] = null;
      setSelectedOptions(newSelectedOptions);

      buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
        Animated.timing(animatedValues[optionIndex], {
          toValue: { x: 0, y: 0 },
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    } else {
      const emptySlotIndex = selectedOptions.findIndex(slot => slot === null);

      if (emptySlotIndex !== -1) {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[emptySlotIndex] = { value: option, index: optionIndex };
        setSelectedOptions(newSelectedOptions);

        buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
          slotRefs[emptySlotIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
            Animated.timing(animatedValues[optionIndex], {
              toValue: { x: spx - px, y: spy - py },
              duration: 300,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start();
          });
        });
      } else {
        const lastSlotIndex = selectedOptions.length - 1;
        const lastOption = selectedOptions[lastSlotIndex];

        if (lastOption !== null) {
          const lastOptionIndex = lastOption.index;
          buttonRefs.current[lastOptionIndex].measure((fx, fy, width, height, px, py) => {
            Animated.timing(animatedValues[lastOptionIndex], {
              toValue: { x: 0, y: 0 },
              duration: 500,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start(() => {
              const newSelectedOptions = [...selectedOptions];
              newSelectedOptions[lastSlotIndex] = { value: option, index: optionIndex };
              setSelectedOptions(newSelectedOptions);

              buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
                slotRefs[lastSlotIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
                  Animated.timing(animatedValues[optionIndex], {
                    toValue: { x: spx - px, y: spy - py },
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                  }).start();
                });
              });
            });
          });
        }
      }
    }
  };

  return (
    <View>
      
      <View style={styles.questionContainer}>
      <Image source={require('../assets/FrageEuleSequence.png')} style={styles.questionImage} />
      <View style={styles.sequenceQuestionContainer}>
        <Text style={styles.question}>{question.question}</Text>
      </View> 
    </View>
      <View style={styles.answerSlots}>
        {Array.from({ length: question.correctAnswer.length }).map((_, index) => (
          <View key={index} ref={ref => (slotRefs[index] = ref)} style={styles.answerSlot}>
            <Animated.Text style={[styles.answerSlotText, { opacity: 0 }]}>
              {selectedOptions[index]?.value}
            </Animated.Text>
          </View>
        ))}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => selectOption(option, index)}>
            <Animated.View
              ref={ref => (buttonRefs.current[index] = ref)}
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

export default SequenceQuiz;