import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

const App = () => {
  const [helloFlag, setHelloFlag] = useState(true); //boolean bir değer

  function updateFlag() {
    setHelloFlag(!helloFlag); //açılır kapanır bir fonksiyon
  }

  return (
    <SafeAreaView>
      <Text>Hello LifeCycyle</Text>
      <Button title="Up!" onPress={updateFlag} />
      {helloFlag && <Hello />}
      {/* <Button title="Down!" onPress={() => setNumber(number - 1)} /> */}
    </SafeAreaView>
  );
};

export default App;

function Hello() {
  useEffect(() => {
    console.log('Merhaba Dünya!');
    //eğer clean up işlemi yapılacaksa aşağı şekilde return döndürüşmeli
    return () => {
      console.log('Gidiyorum buralardan');
    };
  }, []);
  return (
    <View style={{backgroundColor: 'aqua', padding: 10}}>
      <Text>Hello Flag Destination</Text>
    </View>
  );
}
