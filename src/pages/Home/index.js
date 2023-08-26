import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { Saldo } from '../../components'
import ButtonIcon from '../../components/ButtonIcon'
import { WARNA_ABU_ABU } from '../../utils/constant'
import PesananAktif from '../../components/PesananAktif'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang...</Text>
          <Text style={styles.username}>Panji Erlangga</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.labelLayanan}>Layanan Kami</Text>
        <View style= {styles.iconLayanan}>
          <ButtonIcon title="Kiloan" type="layanan"/>
          <ButtonIcon title="Satuan" type="layanan"/>
          <ButtonIcon title="VIP" type="layanan"/>
          <ButtonIcon title="Karpet" type="layanan"/>
          <ButtonIcon title="Setrika Saja" type="layanan"/>
          <ButtonIcon title="Express" type="layanan"/>
        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.labelLayanan}>Pesanan Aktif</Text>
        <PesananAktif title="Pesanan No. 0988765" status="Sudah Selesai"/>
        <PesananAktif title="Pesanan No. 0988765" status="Masih Dicuci"/>
        <PesananAktif title="Pesanan No. 0988765" status="Sudah Selesai"/>
        <PesananAktif title="Pesanan No. 0988765" status="Sudah Selesai"/>
      </View>
      </ScrollView>     
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.30,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  logo: {
    width: windowWidth*0.25,
    height: windowHeight*0.06
  },
  hello: {
    marginTop: windowHeight*0.030
  },
  selamat: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  username: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15
  },
  labelLayanan: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 16
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }

})