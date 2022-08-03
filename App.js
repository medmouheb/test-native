import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListOfPeople from "./src/listOfpeople"
import Person from './src/person';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ListOfPeople} />
        <Stack.Screen name="Person" component={Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;