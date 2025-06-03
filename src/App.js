import React, {useState} from 'react';
import {
  SafeAreaView,
  Switch,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import playerData from './player_data.json';
import indianaPlayer from './indiana_data.json';
import PlayerCard from './PlayerCard';
const App = () => {
  const [firstFiveTeam1, setFirstFiveTeam1] = useState(false);
  const [firstFiveTeam2, setFirstFiveTeam2] = useState(false);

  const showTeam1 = firstFiveTeam1
    ? playerData.filter(player => player.isFive)
    : playerData;

  const showTeam2 = firstFiveTeam2
    ? indianaPlayer.filter(player => player.isFive)
    : indianaPlayer;

  return (
    <SafeAreaView>
      <View style={styles.switchContainer}>
        <View style={styles.teamSwitch}>
          <Switch
            value={firstFiveTeam1}
            onValueChange={value => setFirstFiveTeam1(value)}
          />
          <Text style={styles.status}>
            {firstFiveTeam1 ? 'First Five' : 'Team'}
          </Text>
        </View>

        <View style={styles.teamSwitch}>
          <Switch
            value={firstFiveTeam2}
            onValueChange={value => setFirstFiveTeam2(value)}
          />
          <Text style={styles.status}>
            {firstFiveTeam2 ? 'First Five' : 'Team'}
          </Text>
        </View>
      </View>

      <View style={styles.flatStyle}>
        <View style={{flex: 1}}>
          <FlatList
            data={showTeam1}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlayerCard players={item} team="team1" />}
          />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={showTeam2}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlayerCard players={item} team="team2" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatStyle: {
    flexDirection: 'row',
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },

  status: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default App;
