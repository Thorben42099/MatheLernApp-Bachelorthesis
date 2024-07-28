import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * QuizContext
 * 
 * Ein Kontext zur Verwaltung von Bewertungen für verschiedene Quiztypen.
 */

export const QuizContext = createContext();

/**
 * QuizProvider Komponente
 * 
 * Eine Komponente, die einen Kontextprovider bereitstellt, um Bewertungen für verschiedene Quiztypen zu speichern und zu verwalten.
 * 
 * Props:
 * - children: Die Kinderkomponenten, die den Kontext nutzen.
 * 
 * Zustand:
 * - ratings: Ein Objekt, das die Bewertungen für verschiedene Quiztypen speichert.
 * 
 * Effekte:
 * - Lädt die Bewertungen aus dem AsyncStorage beim ersten Rendern.
 * 
 * Methoden:
 * - updateRating: Aktualisiert die Bewertung für einen bestimmten Quiztyp und speichert sie im AsyncStorage.
 */

export const QuizProvider = ({ children }) => {
  const [ratings, setRatings] = useState({
    sequence: 0,
    comparison: 0,
    fillIn: 0,
    unitConversion: 0,
    order: 0,
    schedule: 0,
  });

  useEffect(() => {
    const loadRatings = async () => {
      try {
        const keys = Object.keys(ratings);
        const loadedRatings = {};
        for (const key of keys) {
          const rating = await AsyncStorage.getItem(`@${key}_stars`);
          loadedRatings[key] = rating ? Number(rating) : 0;
        }
        setRatings(loadedRatings);
      } catch (e) {
      }
    };

    loadRatings();
  }, []);

  const updateRating = async (quizType, newRating) => {
    if (!quizType) {
      return;
    }

    try {
      await AsyncStorage.setItem(`@${quizType}_stars`, String(newRating));
      setRatings(prevRatings => ({
        ...prevRatings,
        [quizType]: newRating,
      }));
    } catch (e) {
    }
  };

  return (
    <QuizContext.Provider value={{ ratings, updateRating }}>
      {children}
    </QuizContext.Provider>
  );
};
