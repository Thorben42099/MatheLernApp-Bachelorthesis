import { StyleSheet } from 'react-native';

const buttonSize = 100; // Einheitliche Größe für Buttons und Felder

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cremefarbene Hintergrundfarbe
    paddingTop: 50,
    alignItems: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  cartoonImage: { // Stil für das Cartoon-Bild hinzugefügt
    width: 600,
    height: 500,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  greetingText: { // Stil für den Begrüßungstext
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  segmentedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressSegment: {
    flex: 1,
    height: 10,
    marginHorizontal: 2,
    backgroundColor: '#cff0fa', // Hintergrundfarbe der Segmente
    borderRadius: 5, // Abgerundete Ecken
  },
  activeSegment: {
    backgroundColor: '#197694', // Farbe der aktiven Segmente
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  question: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  questionSchedule: {
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  answerSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  answerSlot: {
    width: buttonSize +10,
    height: buttonSize,
    margin: 10,
    marginLeft: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  answerSlotText: {
    fontSize: 18,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  comparisonQuestion: {


    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  comparisonText: {
    fontSize: 30,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  comparisonAnswerContainer: {
    width: buttonSize + 10,
    height: buttonSize,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  comparisonAnswerText: {
    fontSize: 18,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  optionButton: {
    width: buttonSize +10,
    height: buttonSize,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 2,
    borderRadius: 5,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  selectedOptionButton: {
    backgroundColor: '#ADD8E6', // Standardfarbe für ausgewählte Option
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    
  },
  selectedUnitOptionButton: {
    backgroundColor: '#FFA500', // Orange für ausgewählte Option bei Unit Conversion
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  optionText: {
    color: '#000000',
    fontSize: 26,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  checkButton: {
    backgroundColor: '#FFBF47',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  checkButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  nextButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  resultText: {
    fontSize: 18,
    //marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    color:'black',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  starWrapper: {
    position: 'relative',
    width: 20,
    height: 20,
  },
  starFilled: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quizButton: {
    flexDirection: 'column', // Change to column for vertical alignment within each button
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '30%', // Adjust the width to fit 3 buttons per row
    height: 180, // Increase height for better appearance
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    borderRadius: 20,
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
    justifyContent: 'space-between',
  },
  quizButtonText: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  exampleTaskContainer: {
    borderWidth: 0,
    borderColor: '#000', // Schwarzer Rand
    padding: 10,
    marginBottom: 1,
    marginTop: 5,
    borderRadius: 15,
    width: '90%', // 80% der Breite des Quizbuttons
    justifyContent: 'center', // Vertikal zentrieren
    alignItems: 'center', // Horizontal zentrieren

  },
  exampleTaskText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  quizButtonContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },


  unitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Make sure the container is centered
    marginVertical: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: buttonSize * 2, // Verdoppelt die Größe des Containers
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  unitText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  scheduleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  scheduleImagesContainerAligned: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Bilder am unteren Rand ausrichten
    marginBottom: 0,
    height: 'auto',
  },
  scheduleImage: {
    width: '48%', // Adjust as necessary for your design
    height: 350, // Adjust as necessary for your design
    resizeMode: 'contain',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  quizGrid: { // Stil für das Kachelmuster
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  correctImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  questionImage: {
    width: 500,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 2,

  },
  questionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
  },
  sequenceQuestionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Make sure the container is centered
    marginVertical: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: 'auto', // Verdoppelt die Größe des Containers
    height: 'auto',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt‚
    backgroundColor: '#FFBF47'
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    width: '100%', // Ensures the navigation bar spans the width of the screen
    backgroundColor: '#FFFDD0', // Match the background color of the screen
    },
  navButton: {
    padding: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  navButtonText: {
    color: 'black',
    fontSize: 22,
    fontFamily:'AvantGarde'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFDD0',
  },
  resultImage:{
    width: 600, // Adjust as necessary for your design
    height: 450, // Adjust as necessary for your design
    resizeMode: 'contain',
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'AvantGarde',

  },
  resultButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#FFBF47',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  resultButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'AvantGarde'
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    backgroundColor:'#7da5b3',
    borderRadius: 10,
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  starContainer2: {
    backgroundColor: '#7da5b3',
    padding: 12,
    borderRadius:15,
    shadowColor: '#000', // Farbe des Schattens
    shadowOffset: { width: 0, height: 2 }, // Verschiebung des Schattens
    shadowOpacity: 0.8, // Deckkraft des Schattens
    shadowRadius: 1.84, // Unschärferadius des Schattens
    elevation: 4, // Speziell für Android, um einen Schatteneffekt zu erzeugen
  },
  starWrapper: {
    position: 'relative',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledStar: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  correctResult:{
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    backgroundColor: '#77dd77', // Pastellgrün
    color:'black',
    padding:5,
    paddingHorizontal: 15,
    borderRadius: 15,
    
  },
  incorrectResult:{
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'AvantGarde', // Schriftart hinzugefügt
    backgroundColor: '#ff6961', // Pastellrot
    color:'black',
    padding:5,
    paddingHorizontal: 15,
    borderRadius: 15,
   
  },
  resultAnswerText:{
    color: 'black',
    fontFamily:'AvantGarde',
    fontSize: 24,
  },
});
