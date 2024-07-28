/* Jo-Jo Seite 51. Nummer 10. */

export default [
    {
      question: '',
      image: require('../assets/FrageEuleOrderLaengen.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
      type: 'order',
      options: ['105cm', '300mm', '200m', '56dm', '940mm', '6m'],
      correctAnswer: ["300mm", "940mm", "105cm", "56dm", "6m", "200m"],
    },
    {
      question: '',
      image: require('../assets/FrageEuleOrderGewichte.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
      type: 'order',
      options: ['500g', '2kg', '100g', '1kg', '750g', '50g'],
      correctAnswer: ['50g', '100g', '500g', '750g', '1kg', '2kg'],
    },
    {
      question: '',
      image: require('../assets/FrageEuleOrderZeiten.png'), // Beispiel-Bilder, anpassen an die tatsächlichen Bildpfade
      type: 'order',
      options: ['5min', '120s', '1h', '30min', '10s', '600s'],
      correctAnswer: ['10s', '120s', '5min', '600s', '30min', '1h'],
    },
  ];
  