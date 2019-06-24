import React from 'react'
import { View, Slider, Text } from 'react-native'

export default function UdacitySlider({ max, unit, step, value, onChange }) {
    return (
        <View>
            <Slider 
                value={value}
                maximumValue={max}
                step={step}
                minimumValue={0}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}