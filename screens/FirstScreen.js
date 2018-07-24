import React from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {StackNavigator} from "react-navigation";
import {createStackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import User from "../Data/User";
//const util = require('util');

export default class FirstScreen extends React.Component {

    static navigationOptions = {
    	drawerLabel: 'Home',
        title: 'First screen',
        headerLeft: <Text onPress={() => 
  		navigation.navigate('DrawerOpen')}>Menu</Text>,
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };
    componentDidMount(){
		
    	/*Font.loadAsync({
    	  'Merriweather-Regular': require('../assets/fonts/Merriweather-Regular.ttf'),
    		});
  		Font.loadAsync({
    	  'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    		});
  		Font.loadAsync({
    	  'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    		});*/
        try {
            AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }



        var user:User = require('../Data/User').default;
        /*fetch('http://www.davidhoskins.co.uk/appdata/wp-json/mylistingplugin/v1/title/'+'Hospital1')
            .then((response) => response.json())
            .then((responseJson) => {

                try {
                    AsyncStorage.setItem('@hospitalOne:key', JSON.stringify(responseJson));

                } catch (error) {
                    // Error saving data
                }

            })
            .catch((error) =>{
                console.error(error);
            });
        fetch('http://www.davidhoskins.co.uk/appdata/wp-json/mylistingplugin/v1/title/'+'Hospital2')
            .then((response) => response.json())
            .then((responseJson) => {

                try {
                    AsyncStorage.setItem('@hospitalTwo:key', JSON.stringify(responseJson));
                } catch (error) {
                    // Error saving data
                }

            })
            .catch((error) =>{
                console.error(error);
            });*/
        return fetch('http://www.davidhoskins.co.uk/appdata/wp-json/mylistingplugin/v1/title/'+'Hospital3')
            .then((response) => response.json())
            .then((responseJson) => {

                try {
                    var data = responseJson;
                    console.log("Hello" + data.length);
                    for(var i in data)
                    {
                        var post = data[i];
                        for(var k in post)
                        {
                            console.log("add post" + post[k].post_name);
                            // var id = data[i].id;
                            //var name = data[i].name;
                            AsyncStorage.setItem('@'+post[k].post_name+':key', "["+JSON.stringify(post[k])+"]");
                        }

                    }

                } catch (error) {
                    // Error saving data
                }

            })
            .catch((error) =>{
                console.error(error);
            });
    }
    render(){
        var {navigate} =  this.props.navigation;
        return(
            <View>
                <Text> This is screen 1</Text>
                    <Button
                        onPress = {
                            () => this.chooseScreen(2)

                        }
                        title = "Choose Hospital"
                    />
                <Button
                    onPress = {
                        () => this.chooseScreen(4)

                    }
                    title = "My Hospital"
                />
            </View>
        );

    }
    chooseScreen (str){
        var {navigate} =  this.props.navigation;

        if(str==4){
            navigate("Content", {title:"temp title", desc: "description text to show what could be shown", image:"test"})
        }
        else if(str==2){
            navigate("Third", {})
        }
    }

}
const MyApp = createDrawerNavigator({
  Home: {
    screen: FirstScreen,
  },
});
