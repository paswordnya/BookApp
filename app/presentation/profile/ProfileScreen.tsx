import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState ,useEffect} from 'react';
import { RootStackParamList } from '../../../App';
import { SafeAreaView,FlatList,Text,Image,TextInput, View ,TouchableOpacity, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import CustomToolbar from '../../component/CustomToolbar';


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen = ({ navigation }: Props) =>{
    const handleBackPress = () =>{
        navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.containter} >
            <CustomToolbar title="Profile" onBackPress={()=> handleBackPress()}  />
            <View style={styles.rowBox}>
                <View style={styles.box1}>
                    <Text> Box 1 </Text>
                </View>
                <View style={styles.box2}>
                    <Text> Box 2 </Text>
                </View>
                <View style={styles.box3}>
                    <Text> Box 3 </Text>
                </View>
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    containter:{
        flex:1,

    },
    rowBox:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box1:{
        backgroundColor:'rgb(86, 39, 242)',
        flex: 1,
        padding:12,
        
    },
    box2:{
        backgroundColor:'rgb(242, 154, 39)',
        flex: 1,
        padding:12,
    },
    box3:{
        backgroundColor:'rgb(39, 212, 242)',
        flex: 1,
        padding:12,
    }




});
export default ProfileScreen;