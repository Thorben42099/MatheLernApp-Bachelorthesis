export default [
    {
      question: 'Alexandra wohnt im Wiesenweg und hat um 7:30 Uhr Unterrichtsbeginn. Sie möchte sich mit einer Freundin in der Lorettostraße nahe der Schule treffen. Wann sollte sie spätestens losfahren?',
      type: 'schedule',
      question2part1: 'Sie muss',
      question2part2: 'losfahren.',
      imageLeft: require('../assets/Fahrplan1.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
      imageRight: require('../assets/Fahrplan2.png'),
      options: ['7:07 Uhr', '7:17 Uhr', '7:27 Uhr', '7:37 Uhr'],
      correctAnswer: '7:17 Uhr',
    },
    {
      question: 'Emil wohnt in der Holbeinstraße und möchte am Mittwoch zu einer Theateraufführung ins Stadttheater fahren. Die Aufführung beginnt um 16:00 Uhr. Wann sollte er spätestens losfahren?',
      type: 'schedule',
      question2part1:'Emil muss um ',
      question2part2:'losfahren.',
      imageLeft: require('../assets/Fahrplan1.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
      imageRight: require('../assets/Fahrplan2.png'),
      options: ['7:20 Uhr', '15:40 Uhr', '15:27 Uhr','15:50 Uhr'],
      correctAnswer: '15:50 Uhr',
    },
    {
        question: 'Felix möchte an einem Sonntag zum Stadtlauf fahren. Er ist um 8:30 Uhr mit Freunden am Bertoldsbrunnen verabredet. Wann sollte Felix am Klosterplatz spätestens abfahren?',
        type: 'schedule',
        question2part1:'Felix muss spätestens um',
        question2part2:'abfahren.',
        imageLeft: require('../assets/Fahrplan1.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
        imageRight: require('../assets/Fahrplan2.png'),
        options: ['8:00 Uhr', '8:04 Uhr', '8:19 Uhr', '8:34 Uhr'],
        correctAnswer: '8:19 Uhr',
      },
    
  ];