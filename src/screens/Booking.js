import React,{useState,useRef} from 'react';   
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Header,Input,Button } from "react-native-elements";
import flightsdata from '../../Flights.json';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../screens/styles/styles';
import CardFlip from 'react-native-card-flip';


const Booking =(props)=>{
    const flipcard = useRef();
    const Total=props.navigation.getParam('TotalCost', 'no-TotalCost');
    const Source=props.navigation.getParam('Source', 'no-source');
    const Destination=props.navigation.getParam('Destination', 'no-destination');
    const users=props.navigation.getParam('names','no-names');
    console.log(users);
    return (
        <View style={{bottom:45}}>
        <Header
          centerComponent={{
            text: "Happy Jouney",
            style: { color: "#fff",fontSize: 25}
          }}
          style={styles.header}
        />
        <CardFlip ref={flipcard} style={{ width: 250, height: 300 }}>
        <TouchableOpacity 
          style={{
            width: '170%',
            height: 500,
            backgroundColor: 'rgb(134,147,158)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,
            
          }}
          onPress={() => flipcard.current.flip()}
        >
         <View style={{top:-50}}>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>You have payed &#8377;{Total}  </Text> 
            <Text></Text>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>{Source} &#10174; {Destination} </Text>
            <Text></Text>
            <Text style={{color: 'white', fontSize: 25,fontWeight:'bold',}}>{Destination} &#10174; {Source}</Text>
         </View> 
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '170%',
            height: 500,
            backgroundColor: 'rgb(134,147,158)',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard.current.flip()}>
        <View style={{top:200,left:10}}>
          <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>Thank You for using </Text>
          <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>             &#9829;Happy Jouney...&#9829;</Text>
        </View>
        </TouchableOpacity>
      </CardFlip>
      <View></View>
      <Button
                buttonStyle={{ width: 150,top:2 }}
                containerStyle={{ margin: 5,left:240,top:250 }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                }}
                disabledTitleStyle={{ color: "#00F" }}
                icon={<Icon name="hand-okay" size={15} color="#0FF" />}
                iconContainerStyle={{ background: "#000" }}
                loadingProps={{ animating: true }}
                onPress={()=>props.navigation.navigate('Home')}
                title="Visit again"
                titleStyle={{ marginHorizontal: 5 }}
            />
        </View>
    )
};
export default Booking;