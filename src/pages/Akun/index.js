import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {ImageWajah } from '../../assets'
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'
import { Profile } from '../../components'

const Akun = () => {
  return (
    <View style={styles.page}>
    <View style={styles.container}>
      <ImageBackground source={ImageWajah} style={styles.wajah}>
      </ImageBackground>
      <View style={styles.profil}>
        <Text style={styles.nama}>Panji Erlangga</Text>
        <Text style={styles.alamat}>Dowakan,Srumbung jln Joyoningrat km 4,5</Text>
      </View>
    </View>
    <View>
        <Profile />
      </View>
    </View>
  )
}

export default Akun

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: WARNA_UTAMA,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: windowWidth*0.09,
    flexDirection: 'row'
  },
  wajah: {
    paddingHorizontal: 24,    
  },
  nama:{
    color: 'black',
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    paddingBottom: 1
  },
  alamat: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  }
})