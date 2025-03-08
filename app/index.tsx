import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Pressable, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { OnboardingSlide, CustomButton } from '@/components'
import { OnboardingSlideType } from '@/Library/types/Onboarding'
import { router } from 'expo-router'

const SLIDES: OnboardingSlideType[] = [
    {
      name: "Welcome to mentor me",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla neque libero laborum ipsam porro harum beatae velit in. Soluta, minus quisquam itaque reprehenderit, ab cum asperiores perferendis, quae provident blanditiis dignissimos deserunt repellendus ratione minima voluptatum voluptatibus temporibus neque maxime porro quibusdam! Aspernatur eveniet ipsam",
      image: "https://images.ctfassets.net/4mpdf15r5lc4/6WUhB7QJkuPETr7nahTwCW/9e5a8ddc81e4d36365780b64475cabc8/Fashion-designer.webp"
    },
    {
      name: "The best learning experience",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla neque libero laborum ipsam porro harum beatae velit in. Soluta, minus quisquam itaque reprehenderit, ab cum asperiores perferendis, quae provident blanditiis dignissimos deserunt repellendus ratione minima voluptatum voluptatibus temporibus neque maxime porro quibusdam! Aspernatur eveniet ipsam",
      image: "https://baijudesign.com/wp-content/uploads/2024/11/about-me-Best-Graphic-designer-in-trivandrum-1024x1024.webp"
    },
    {
      name: "Our mentors are the best in the business",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla neque libero laborum ipsam porro harum beatae velit in. Soluta, minus quisquam itaque reprehenderit, ab cum asperiores perferendis",
      image: "https://images.ctfassets.net/4mpdf15r5lc4/70Y5m5O7R684OIFuctcnbe/57f429ea39639483f38c079d24d540cc/Category-Computing_and_ICT.webp"
    }
  ]

  

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  
  const handleNextSlide = () => {
    if (currentIndex < SLIDES.length - 1) {
      const activeIndex = currentIndex + 1
      flatListRef.current?.scrollToIndex({index:activeIndex, animated: true})
      
      } else {
        // flatListRef.current?.scrollToIndex({index:0, animated: true})
        router.push("/login")
  }
}

const skip = () => {
  // setCurrentIndex(SLIDES.length - 1)
  flatListRef.current?.scrollToIndex({index:SLIDES.length - 1, animated: true})
}

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" />
        <FlatList 
            ref = {flatListRef}
            scrollEventThrottle={16}
            data={SLIDES}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(_, index) => index.toString()}
            style={{
                flex:1,
            }}
            onScroll={e =>{
              const x = e.nativeEvent.contentOffset.x
              const index = Math.round(x / (Dimensions.get('window').width))
              if (index !== currentIndex) {
              setCurrentIndex(index)
              }
            }}
            renderItem={({item}) => <OnboardingSlide data={item} />}
        />

        <View style={{
            borderTopColor: "#ccc",
            borderTopWidth: 1,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
            backgroundColor: "white",
            marginTop: -10 
            
            

        }}>
          <Text style={{
            fontSize:20,
            fontWeight: "bold",
            textAlign: "center",
          }}>
            {SLIDES[currentIndex].name}
          </Text>

          <Text style={{
            fontSize: 13,
            textAlign: "center",
            marginTop: 20,

          }}>
            {SLIDES[currentIndex].description}
          </Text>

          <View
          style={{
            marginVertical: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5
          }}>
              {SLIDES.map((_,index) => <View
              key = {index}
              style={{
                height: 6,
                width: currentIndex === index ? 20 : 6,
                borderRadius: 25,
                backgroundColor: currentIndex === index ? "blue" : "#ccc",
              }}>

              </View>)}
          </View>

          <CustomButton 
          label={currentIndex === 0 ? "Get Started" : currentIndex < SLIDES.length - 1 ? "Next" : "Get Started"}
          onPress={handleNextSlide}
          />
        </View>

        <View style={{
          position: "absolute",
          right: 20,
          top: StatusBar.currentHeight ? StatusBar.currentHeight : 10
        }}>
          <Pressable
          hitSlop={20}
          onPress={skip}>
            <Text>Skip</Text>
          </Pressable>
        </View>

    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})