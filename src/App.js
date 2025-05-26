import React, {useState} from 'react';
import {SafeAreaView, View, Text, Switch, FlatList} from 'react-native';

const allFruits = [
  {id: 1, name: 'Elma', isFavorite: true},
  {id: 2, name: 'Muz', isFavorite: false},
  {id: 3, name: 'Çilek', isFavorite: true},
  {id: 4, name: 'Karpuz', isFavorite: false},
];

const App = () => {
  const [isFavoriteleriGosterecekState, setIsFavoriteleriGosterecekState] =
    useState(false);

  //burada bir
  const meyveleriFiltreleme = () => {
    return isFavoriteleriGosterecekState
      ? allFruits.filter(herhangibirşey => herhangibirşey.isFavorite)
      : allFruits;
  };

  const değişkenatama = meyveleriFiltreleme();

  return (
    <SafeAreaView>
      <Text>selam</Text>
      <Switch
        value={isFavoriteleriGosterecekState}
        onValueChange={setIsFavoriteleriGosterecekState}
      />
      <FlatList
        data={değişkenatama}
        renderItem={data => <Text>{data.item.name} </Text>}
      />
    </SafeAreaView>
  );
};
export default App;
