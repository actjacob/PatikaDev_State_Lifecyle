import React, {useState} from 'react';
import {
  SafeAreaView,
  Switch,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const cafeList = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
];

const App = () => {
  const [darkTeam, setDarkTeam] = useState(false);
  const [list, setList] = useState(false);

  const gösterilecekListe = list
    ? cafeList.filter(gösterilecek => gösterilecek.isFavorite)
    : cafeList;

  const darkTemaSitili = [
    styles.container,
    darkTeam ? styles.darkTema : styles.acıkTema,
  ];

  return (
    <SafeAreaView style={darkTemaSitili}>
      <Switch value={darkTeam} onValueChange={value => setDarkTeam(value)} />
      <Text style={{color: darkTeam ? 'white' : 'black'}}>
        {darkTeam ? 'Koyu Mod' : 'Açık Mod'}{' '}
      </Text>
      <View>
        <Switch value={list} onValueChange={value => setList(value)} />
        <FlatList
          data={gösterilecekListe}
          renderItem={({item}) => (
            <Text style={{color: darkTeam ? 'white' : 'black'}}>
              {item.name}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkTema: {
    backgroundColor: 'black',
  },
  acıkTema: {
    backgroundColor: 'white',
  },
});
export default App;
