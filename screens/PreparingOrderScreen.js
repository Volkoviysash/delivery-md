import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className='bg-[#dad4e1] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/gif/loading.gif")}
        animation='slideInUp'
        iterationCount={1}
        className='h-40 w-40'
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={2}
        className='text-lg my-10 text-white text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={30} indeterminate={true} color='white' />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
