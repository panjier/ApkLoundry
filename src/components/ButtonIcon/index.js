import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetPoint, IconKiloan, IconKarpet, IconSatuan, IconSetrika, IconVIP, IconEkspress } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title, type}) => {

    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />

        if(title === "Get Point") return <IconGetPoint />

        if(title === "Kiloan") return <IconKiloan />

        if(title === "Satuan") return <IconSatuan />

        if(title === "VIP") return <IconVIP />

        if(title === "Karpet") return <IconKarpet />

        if(title === "Setrika Saja") return <IconSetrika />

        if(title === "Express") return <IconEkspress />

        return <IconAddSaldo />
    }

  return (
    <TouchableOpacity style={styles.container(type)}>
        <View style={styles.button(type)}>
            <Icon />
        </View>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom : type === "layanan" ? 10 : 0,
        marginRight: type === "layanan" ? 30 : 0
    }),
    button: (type) =>  ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) => ({
        color: 'black',
        fontSize: type === "layanan" ? 12 : 10,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    })
})