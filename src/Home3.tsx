import React from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
/**
 * Import StackNavigationProp and RouteProp  which will be used to create the types.
 * See the use below in our type Props definition
 */

import { StackNavigationProp } from '@react-navigation/stack';
//import { RouteProp } from '@react-navigation/native';//Not in use here

/**
 * Next, let us set up the Prop types that we shall use in our HomeScreen Component
 * Here we enlist screen names to be displayed as routes along with the respective parameter types to be passed.
 */
type Home3ScreenStackParamList = {
    Home3Screen: undefined; //no parameters expected to be passed to route when called
    Component8Screen: undefined;
    Component9Screen: undefined;
};

type Home3ScreenNavigationProp = StackNavigationProp<Home3ScreenStackParamList, 'Home3Screen'>;

//if we are using route as well, make below available
//type HomeScreenRouteProp = RouteProp<HomeScreenStackParamList, 'HomeScreen'>;

type Props = {
    //route: HomeScreenRouteProp; //if using route
    navigation: Home3ScreenNavigationProp;
};

/*Let's create a Home component that App will display as Home Screen. It can be whatever name you want*/
const Home: React.FC<Props> = ({ navigation }) => { //We are not using route here at all; so we can as well pass only navigation
    return (
        <SafeAreaView style={styles.container}>
            <Button title="Component8 Page"
                onPress={() => navigation.navigate('Component8Screen')} />
            <Button title="Component9 Page"
                onPress={() => navigation.navigate('Component9Screen')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'stretch',
        justifyContent: 'center',
        fontSize: 18
    },
    logo: {
        width: 133,
        height: 55,
        paddingBottom: 50
    }
});

export default Home;