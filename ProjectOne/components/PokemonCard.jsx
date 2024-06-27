import {View, Text, StyleSheet, Platform, Image} from 'react-native';

import React from 'react'

function PokemonCard({
    name, image, type, category
}) {
  return (
    <View style = {styles.card}>
        <View>
            <Text>{name}</Text>
            <Text></Text>
        </View>
        {/* <Image source={image} accessibility=""></Image> */}

        <View>
            <Text>{type}</Text>
            <Text>{category}</Text>
        </View>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{
                shadowOffset :{width:2, height:2},
                shadowColor:"#333",
                shadowOpacity:0.5,
                shadowRadius:4,
            },
            android:{
                elevation:11,
            }
        })
    }
})