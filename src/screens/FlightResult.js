import React,{useState,useRef} from 'react';   
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Header,Input,Button } from "react-native-elements";
import flightsdata from '../../Flights.json';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../screens/styles/styles';
import CardFlip from 'react-native-card-flip';

const FlightResult = (props)=>{
    const flipcard = useRef();
    const flipcard2 = useRef();
    const StartDate=props.navigation.getParam('startDate', 'no-startDate');
    const EndDate=props.navigation.getParam('endDate', 'no-endDate');
    const Source=props.navigation.getParam('source', 'no-source');
    const Destination=props.navigation.getParam('destination', 'no-destination');
    const Passengers=props.navigation.getParam('passengers', 'no-passengers');
    const [airline, setAirline] = useState('');
    const [cost, setCost] = useState('');
    const [plane, setplane] = useState('');
    const [airlined, setAirlined] = useState('');
    const [costd, setCostd] = useState('');   
    const image = { uri: "https://i.pinimg.com/originals/00/ba/37/00ba3746be74459f1ab4d3d1b01af1a7.jpg" };
    const Departurecost=cost*Passengers;
    const Returncost=costd*Passengers;
   
    const SearchByData = () =>{
        try{
                 let sourceFlights = flightsdata.filter(
                                             (flight => (flight.source === Source)&&
                                            //  (flight.date === StartDate)&&
                                             (flight.destination === Destination)&&
                                             (flight.seats >= Passengers)))
                                               
                                            setAirline(sourceFlights[0].airline);
                                            setCost(sourceFlights[0].cost);
                                            setplane(sourceFlights[0].img);

                  let destinationFlights =   flightsdata.filter(
                                                 (flight => (flight.source === Destination)&&
                                            //    && (flight.date === EndDate)&&
                                                (flight.destination === Source)&& 
                                                (flight.seats >= Passengers))) 
                                             
                                                setAirlined(destinationFlights[0].airline);
                                                setCostd(destinationFlights[0].cost);
            }
            catch(error){
              props.navigation.navigate('Home');
              alert("sorry for the inconvenience....please provide another inputs...")
             } 
        };

    return(
        <View style={{bottom:45}} onLayout={SearchByData}>
        <Header
          centerComponent={{
            text: "Happy - Jouney",
            style: { color: "#fff",fontSize: 25}
          }}    
          style={styles.header}
        />
         <Text></Text>
        <Text></Text>
     <CardFlip ref={flipcard} style={{ width: 250, height: 300 }}>
        <TouchableOpacity 
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,
            
          }}
          onPress={() => flipcard.current.flip()}
        >
         <View>
         {/* <ImageBackground source={image} style={styles.image}> */}
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>{Source} To {Destination}</Text>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>{airline} AirLines</Text>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>Cost of the ticket  &#8377;{cost}</Text>
            <Text></Text>
        {/* </ImageBackground> */}
          </View> 
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard.current.flip()}>
          <Text
            style={{ textAlign: 'center', color: 'white', fontSize: 30 ,fontWeight:'bold',top:100}}>
            You have to pay &#8377;{Departurecost} for {Passengers} Passengers
          </Text>
        </TouchableOpacity>
      </CardFlip>
      <Text></Text>
      <Text></Text>
      <Text></Text>
     
      <CardFlip ref={flipcard2} style={ styles.flipcard2 }>
    
        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard2.current.flip()}
        >
         <View>
         {/* <ImageBackground source={image} style={styles.image}> */}
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>{Destination} To {Source}</Text>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>{airlined} AirLines</Text>
            <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold', }}>Cost of the ticket  &#8377;{costd} </Text>
            <Text></Text>
        {/* </ImageBackground> */}
          </View> 
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard2.current.flip()}>
          <Text
            style={{ textAlign: 'center', color: 'white', fontSize: 30 ,fontWeight:'bold',top:100}}>
            You have to pay &#8377;{Returncost} for {Passengers} Passengers
          </Text>
        </TouchableOpacity>
      </CardFlip>
     
       <Button
            buttonStyle={{ width: 150 }}
            containerStyle={{ margin: 5,left:250 }}
            disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            icon={<Icon name="airplane-takeoff" size={15} color="#0FF" />}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            onPress={()=>props.navigation.navigate('Details',{Passengers,Departurecost,Returncost,Source,Destination})}
            title="Continue"
            titleStyle={{ marginHorizontal: 5 }}
        />
      </View>
  );
};
export default FlightResult;

    // console.log("Passengers:   "+ Passengers);
    // console.log("flights data     " + flightsdata[2].airline);
    // console.log("StartDate:   "+ StartDate);
    // console.log("EndDate:   "+ EndDate);
    // console.log("Source:   "+ Source);
    // console.log("Destination:   "+ Destination);
    
    // console.log(airline);
    // style={{top:200}}