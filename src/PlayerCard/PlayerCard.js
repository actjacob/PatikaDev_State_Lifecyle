import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './PlayerCardStyle';

const PlayerCard = ({players, team}) => {
  const containerStyle = [
    styles.container,
    team === 'team1' ? styles.backgroundTeam1 : styles.backgroundTeam2,
  ];
  return (
    <View style={containerStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: players.imageUrl,
          }}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.playerName}>{players.playerName} </Text>
        <Text style={styles.playerNumber}>#{players.playerNumber} </Text>
        {/* <Text>playerİsFive </Text> */}
      </View>
      <Text style={styles.playerPosition}>{players.playerPosition} </Text>
    </View>
  );
};

export default PlayerCard;
