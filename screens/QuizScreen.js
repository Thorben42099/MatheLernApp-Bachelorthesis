import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from '../components/StarRating';
import styles from '../styles';
import { QuizContext } from '../components/QuizContext';

import sequenceQuestions from '../questions/sequenceQuestions';
import comparisonQuestions from '../questions/comparisonQuestions';
import fillInQuestions from '../questions/fillInQuestions';
import unitConversionQuestions from '../questions/unitConversionQuestions';
import orderQuestions from '../questions/orderQuestions';
import scheduleQuestions from '../questions/scheduleQuestions';

import SequenceQuiz from '../components/SequenceQuiz';
import ComparisonQuiz from '../components/ComparisonQuiz';
import FillInQuiz from '../components/FillInQuiz';
import UnitConversionQuiz from '../components/UnitConversionQuiz';
import OrderQuiz from '../components/OrderQuiz';
import ScheduleQuiz from '../components/ScheduleQuiz';

/**
 * QuizScreen Komponente
 * 
 * Eine Komponente, die das Quizspiel darstellt, in dem der Benutzer Fragen beantwortet und seine Fortschritte verfolgt.
 * 
 * Props:
 * - route: Route-Objekt zum Empfangen von Parametern, z.B. den Quiztyp.
 * - navigation: Navigation-Objekt zum Navigieren zwischen Bildschirmen.
 */

const quizData = {
  sequence: sequenceQuestions,
  comparison: comparisonQuestions,
  fillIn: fillInQuestions,
  unitConversion: unitConversionQuestions,
  order: orderQuestions,
  schedule: scheduleQuestions,
};

const quizComponents = {
  sequence: SequenceQuiz,
  comparison: ComparisonQuiz,
  fillIn: FillInQuiz,
  unitConversion: UnitConversionQuiz,
  order: OrderQuiz,
  schedule: ScheduleQuiz,
};

export default function QuizScreen({ route, navigation }) {
  const { quizType } = route.params;
  const { updateRating } = useContext(QuizContext);
  const questions = quizData[quizType];
  const QuizComponent = quizComponents[quizType];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [showCorrectImage, setShowCorrectImage] = useState(false);
  const [stars, setStars] = useState(3);
  const [totalStars, setTotalStars] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions[0].correctAnswer.length).fill(null));
  const [comparisonAnswer, setComparisonAnswer] = useState(null);
  const animatedValues = useRef(
    questions.map(q => Array(q.options.length).fill().map(() => new Animated.ValueXY()))
  ).current;

  const currentQuestion = questions[currentQuestionIndex];
  const comparisonAnswerRef = useRef(null);
  const buttonRefs = useRef(Array(currentQuestion.options.length).fill().map(() => React.createRef()));

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedIndex = await AsyncStorage.getItem(`@${quizType}_currentQuestionIndex`);
        if (savedIndex !== null) {
          setCurrentQuestionIndex(Number(savedIndex));
        }
      } catch (e) {
      }
    };

    loadProgress();
  }, [quizType]);

  useEffect(() => {
    const saveProgress = async () => {
      try {
        await AsyncStorage.setItem(`@${quizType}_currentQuestionIndex`, String(currentQuestionIndex));
      } catch (e) {
      }
    };

    saveProgress();

    return () => {
      saveProgress();
    };
  }, [currentQuestionIndex, quizType]);

  useEffect(() => {
    animatedValues[currentQuestionIndex].forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });
  }, [currentQuestionIndex]);

  const resetOptions = () => {
    animatedValues[currentQuestionIndex].forEach((animatedValue, index) => {
      animatedValue.setValue({ x: 0, y: 0 });
    });
    setSelectedOptions(Array(currentQuestion.correctAnswer.length).fill(null));
    setComparisonAnswer(null);
  };

  const resetIncorrectOrderOptions = () => {
    const correctAnswer = currentQuestion.correctAnswer;
    const newSelectedOptions = [...selectedOptions];
  
    selectedOptions.forEach((option, index) => {
      if (option !== null && option !== correctAnswer[index]) {
        const optionIndex = currentQuestion.options.indexOf(option);
        animatedValues[currentQuestionIndex][optionIndex].setValue({ x: 0, y: 0 });
        newSelectedOptions[index] = null;
      }
    });
  
    setSelectedOptions(newSelectedOptions);
  };

  const checkAnswer = () => {
    let isCorrect = false;

    if (currentQuestion.type === 'order') {
      if (JSON.stringify(selectedOptions) === JSON.stringify(currentQuestion.correctAnswer)) {
        setResult('Richtig!');
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetIncorrectOrderOptions(); 
      }
    } else if (currentQuestion.type === 'sequence') {
      const selectedValues = selectedOptions.map(option => option?.value);
      if (JSON.stringify(selectedValues) === JSON.stringify(currentQuestion.correctAnswer)) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();  
      }
    } else if (currentQuestion.type === 'comparison') {
      if (comparisonAnswer === currentQuestion.correctAnswer) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();
      }
    } else if (currentQuestion.type === 'fill-in') {
      if (comparisonAnswer === currentQuestion.correctAnswer) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();
      }
    } else if (currentQuestion.type === 'schedule') {
      if (comparisonAnswer === currentQuestion.correctAnswer) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();
      }
    } else if (currentQuestion.type === 'unit-conversion') {
      if (comparisonAnswer === currentQuestion.correctAnswer) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();
      }
    } else {
      if (selectedOptions.some(option => option.value === currentQuestion.correctAnswer)) {
        setResult('Richtig!');
        setShowCorrectImage(false);
        isCorrect = true;
      } else {
        setResult('Falsch, versuch es nochmal.');
        setShowCorrectImage(false);
        setStars(Math.max(0, stars - 1));
        resetOptions();
      }
    }

    if (isCorrect) {
      setTimeout(() => {
        setShowCorrectImage(false);
        nextQuestion();
      }, 1500);
    }
  };

  const nextQuestion = async () => {
    if (!selectedOptions.some(option => option !== null) && comparisonAnswer === null) {
      setStars(0);
    }else{
   
      setTotalStars(totalStars + stars);
      setStars(3);
      setResult(null);
      setSelectedOptions(Array(currentQuestion.correctAnswer.length).fill(null));
      setComparisonAnswer(null);
    
    }
 
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalStars = totalStars + stars;
      updateRating(quizType, finalStars);
      await AsyncStorage.removeItem(`@${quizType}_currentQuestionIndex`);
      await AsyncStorage.setItem(`@${quizType}_stars`, String(finalStars));
      setCurrentQuestionIndex(0);
      navigation.navigate('Result', { totalStars: finalStars, totalQuestions: questions.length, quizType });
    }
  };
  

  const selectOption = (option) => {
    const emptyIndex = selectedOptions.findIndex(selectedOption => selectedOption === null);
    if (emptyIndex !== -1) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[emptyIndex] = option;
      setSelectedOptions(newSelectedOptions);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }else{
      goToMainMenu();
    }
  };

  const goToMainMenu = () => {
    navigation.navigate('Home');
  };

  const SegmentedProgressBar = ({ progress, steps }) => {
    return (
      <View style={styles.segmentedContainer}>
        {Array.from({ length: steps }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressSegment,
              index < progress * steps && styles.activeSegment,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <View style={styles.progressContainer}>
        <SegmentedProgressBar
          progress={(currentQuestionIndex + 1) / questions.length}
          steps={questions.length}
        />
      </View>
      <View style={styles.quizContainer}>
        <StarRating stars={stars} />
        <QuizComponent
          question={currentQuestion}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          animatedValues={animatedValues[currentQuestionIndex]}
          comparisonAnswer={comparisonAnswer}
          setComparisonAnswer={setComparisonAnswer}
          comparisonAnswerRef={comparisonAnswerRef}
          buttonRefs={buttonRefs}
          selectOption={selectOption}
        />
        
        {result && (
  <View
    style={[
      styles.resultAnswerContainer,
      result === 'Richtig!' ? styles.correctResult : styles.incorrectResult]}><Text style={styles.resultAnswerText}>{result}</Text></View>)}
        <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
          <Text style={styles.checkButtonText}>Antwort prüfen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={previousQuestion} style={styles.navButton}>
          <Text style={styles.navButtonText}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMainMenu} style={styles.navButton}>
          <Text style={styles.navButtonText}>Hauptmenü</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextQuestion} style={styles.navButton}>
          <Text style={styles.navButtonText}>Weiter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
