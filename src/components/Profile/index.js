import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native'
import React from 'react'
import { IconPassword, IconAlamat, IconBank, IconBintang, IconChevron, IconLock, IconUser, IconFacebook, IconWhatsapp, IconInstagram } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const Profile = () => {
  return (
    <View style={styles.super}>
      <Text style={styles.label}>Akun</Text>
      <View style={styles.border}>
     <TouchableOpacity style={styles.user}>
      <IconUser/>
       <View style={styles.text}>
        <Text style={styles.labelUser}>User</Text>
       </View>      
     </TouchableOpacity>
     <TouchableOpacity style={styles.alamat}>
      <IconAlamat/>
       <View style={styles.text}>
        <Text style={styles.labelAlamat}>Alamat</Text>
       </View>      
     </TouchableOpacity>
     <TouchableOpacity style={styles.bank}>
      <IconBank/>
       <View style={styles.text}>
        <Text style={styles.labelBank}>Rekening Bank</Text>
       </View>      
     </TouchableOpacity>
     <TouchableOpacity style={styles.password}>
      <IconPassword/>
       <View style={styles.text}>
        <Text style={styles.labelBank}>Password</Text>
       </View>      
     </TouchableOpacity>
     <TouchableOpacity style={styles.ubah}>
      <IconBintang/>
       <View style={styles.text}>
        <Text style={styles.labelUbah}>Ubah Password</Text>
       </View>      
     </TouchableOpacity>
     <TouchableOpacity style={styles.lock}>
      <IconLock/>
       <View style={styles.text}>
        <Text style={styles.labelLock}>Reset Password</Text>
       </View>      
     </TouchableOpacity>
     <Text style={styles.label}>Social Media</Text>
     <TouchableOpacity style={styles.facebook}>
      <IconFacebook/>
       <View style={styles.text}>
        <Text style={styles.labelFacebook}>Facebook</Text>
       </View>      
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.whatsapp}>
      <IconWhatsapp/>
       <View style={styles.text}>
        <Text style={styles.labelWhatsapp}>Whatsapp</Text>
       </View>      
     </TouchableOpacity>
     
     </View>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.labelLogout}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
    
    
  )
}

export default Profile

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  user: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15,
  },
  label: {
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
  text: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  labelUser: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular',
    
  },
  alamat: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15,

  },   
  labelAlamat: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  bank: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15
  },   
  labelBank: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  password: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15
  },   
  labelPassword: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  ubah: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15
  },   
  labelUbah: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  facebook: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15
  },   
  labelFacebook: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  whatsapp: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15,
  },   
  labelWhatsapp: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  lock: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15,
  },   
  labelLock: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  instagram: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom :15,
  },   
  labelInstagram: {
    color: 'black',    
    fontSize: 14,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular'
  },
  labelLogout: {
    color: WARNA_UTAMA,
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

})