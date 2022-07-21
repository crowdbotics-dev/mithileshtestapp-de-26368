import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <RadioGroup radioButtons={[{
      id: "0",
      value: "0",
      label: "Option 1"
    }, {
      id: "1",
      value: "1",
      label: "Option 2"
    }, {
      id: "2",
      value: "2",
      label: "Option 3"
    }, {
      id: "3",
      value: "3",
      label: "Option 4"
    }]} layout="row" style={{
      left: 71,
      top: 47,
      position: "absolute"
    }}></RadioGroup></View>;
};

export default Untitled1;