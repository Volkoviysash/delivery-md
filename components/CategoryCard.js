import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='mr-4 h-20 flex-col'>
      <Image source={{ uri: imgUrl }} className='h-16 w-16 rounded' />
      <Text className='text-gray-800 font-bold mx-auto'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
