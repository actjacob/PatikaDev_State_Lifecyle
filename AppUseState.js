import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, Switch, StyleSheet} from 'react-native';

const cafeData = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
];

const App = () => {
  const [showCafe, setShowCafe] = useState(false);
  const [darkTema, setDarkTema] = useState(false);

  const showFavorites = showCafe
    ? cafeData.filter(cafe => cafe.isFavorite)
    : cafeData;

  const backgroundColorStyle = [
    styles.container,
    darkTema ? styles.blackTeam : styles.whiteTeam,
  ];

  useEffect(() => {
    if (showCafe) setDarkTema(true);
  }, [showCafe]);

  return (
    <SafeAreaView style={backgroundColorStyle}>
      <Switch value={darkTema} onValueChange={setDarkTema} />
      <Text style={{color: darkTema ? 'white' : 'black'}}>
        {darkTema ? 'Koyu Mod' : 'Açık Mod'}{' '}
      </Text>
      <Switch value={showCafe} onValueChange={value => setShowCafe(value)} />
      <Text style={{color: darkTema ? 'white' : 'black'}}>
        {showCafe ? 'Favoriler' : 'Tüm Kategoriler'}{' '}
      </Text>
      <FlatList
        data={showFavorites}
        renderItem={({item}) => (
          <Text style={{color: darkTema ? 'white' : 'black'}}>
            {item.name}{' '}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackTeam: {
    backgroundColor: 'black',
  },
  whiteTeam: {
    backgroundColor: 'white',
  },
});

export default App;
