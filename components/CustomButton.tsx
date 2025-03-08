import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonType = {
  label : string,
  onPress : () => void
}
 


const CustomButton = ({label, onPress}: ButtonType) => {
  return (
    <TouchableOpacity style={{
      width: "100%",
      backgroundColor: "blue",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    }} 
    activeOpacity={0.8}
    onPress={onPress}>
        <Text style={{
          color: "#fff",
          fontWeight: "bold",
        }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})