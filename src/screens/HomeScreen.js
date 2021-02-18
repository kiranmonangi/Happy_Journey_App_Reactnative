import React,{useState} from "react";
import { View,Text,ToastAndroid } from "react-native";
import { Header,Input,Button } from "react-native-elements";
import styles from './styles/styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from 'react-native-datepicker';

const HomeScreen = (props) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [source, setSource] = useState('');
  const [destination, setdestination] = useState('');
  const [passengers, setpassengers] = useState('');
  // const [sources] = useState(['Vizag','Hyderabad','Mumbai','Chennai','Bengaluru',].sort());
 
// let your dreams take flight
  return (
    <View style={{bottom:45}} onLayout={ToastAndroid.show('asterisks(*) fields are manditory fields',3000)} >
    
    <Header
      centerComponent={{
        text: "Happy Jouney",
        style: { color: "#fff",fontSize: 25}
      }}
      style={styles.header}
    />
     <Input 
      disabledInputStyle={{ background: "#ddd" }}
      label="From *"
      leftIcon={<Icon name="city" size={20} />}
      onChangeText={(source) => setSource(source)}
      value={source} 
      placeholder="Enter source station" 
    />
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      label="To *"
      leftIcon={<Icon name="city" size={20} />}
      onChangeText={(destination) => setdestination(destination)}
      value={destination}
      placeholder="Enter destination station"
    />
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      label="Departure Date *"
      leftIcon={<Icon name="airplane-takeoff" size={20} />}
      onChangeText={(startDate) => setStartDate(startDate)}
      value={startDate}
      placeholder="Enter Departure Date"
    />
     <DatePicker
      style={{width:'10%',position:'absolute',right:1,top:325}}
      format='DD-MM-YYYY'
      startDate ={startDate}
      onDateChange={(d)=>setStartDate(d)}
    />
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      label="Return Date"
      leftIcon={<Icon name="airplane-landing" size={20} />}
      onChangeText={(endDate) => setendDate(endDate)}
      value={endDate}
      placeholder="Enter Return Date"
    />
     <DatePicker
      style={{width:'10%',position:'absolute',right:1,top:425}}
      endDate ={endDate}
      format='DD-MM-YYYY'
      confirmBtnText='confirm'
      cancelBtnText='cancel'
      onDateChange={(d)=>setendDate(d)}
    />
     <Input
    disabledInputStyle={{ background: "#ddd" }}
    label="Travellers *"
    leftIcon={<Icon name="elevator-passenger" size={20} />}
    onChangeText={(passengers) => setpassengers(passengers)}
    value={passengers}
    placeholder="Enter Number of passengers"
  />
  <Button
      buttonStyle={{ width: 150 }}
      containerStyle={{ margin: 5,left:250 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      icon={<Icon name="hand-okay" size={15} color="#0FF" />}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      onPress={()=>props.navigation.navigate('Result',{startDate,endDate,source,destination,passengers})}
      title="Submit"
      titleStyle={{ marginHorizontal: 5 }}
    />
     

 </View>
  );
};
export default HomeScreen;
