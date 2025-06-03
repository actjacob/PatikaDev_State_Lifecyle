import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 5,
    width: windowWidth * 0.49,
    height: windowHeight * 0.15,
    backgroundColor: 'orange',
  },
  backgroundTeam1: {
    backgroundColor: 'orange',
  },
  backgroundTeam2: {
    backgroundColor: 'yellow',
  },
  image: {
    margin: 2,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerName: {
    fontWeight: 'bold',
  },
  playerNumber: {
    fontWeight: 'bold',
  },
  playerPosition: {
    fontStyle: 'italic',
  },
});
