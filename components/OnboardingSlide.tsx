import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { OnboardingSlideType } from '@/Library/types/Onboarding'

type PropType = {
    data: OnboardingSlideType
}

const OnboardingSlide = ({ data }: PropType) => {
    return (
        <View
            style={{
                backgroundColor: "white",
                width: Dimensions.get("window").width,
                flex: 1
            }}>

            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                    <Image 
                    source={{uri:data.image}}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    resizeMode='contain'
                    />
            </View>

        </View>
    )
}

export default OnboardingSlide

const styles = StyleSheet.create({})