import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

//  Config
import Colors from '../config/colors'
import Layout from '../config/layout'

const Bar = ({index, sliderMarginLeft}) =>{
    return(
        <View style={[styles.bar, {opacity: 0.2 * index}]}>
            <Animated.View style={[styles.slider, {marginLeft: sliderMarginLeft}]}>

            </Animated.View>
        </View>
    )
}

export default class PageLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sliderMarginLeft: new Animated.Value(-20)
    };
  }

  componentDidMount = () => {
    this.startAnimation()
  }

  startAnimation = (count) => {
    Animated.loop(
        Animated.timing(this.state.sliderMarginLeft, {
            toValue: 360,
            duration: 900
        }),
        {
          iterations: 10
        }
      ).start()
  }

  renderPlaceholders = () => {
    const { placeholderCount } = this.props 
    let toRender = []
    for(let i = 0; i < placeholderCount; i++){
        toRender.push(
            <Bar 
                key={i}
                index={placeholderCount - i}
                sliderMarginLeft={this.state.sliderMarginLeft}
            />
        )
    }
    return toRender
  }

  render() {
    return (
      <View>
        {this.renderPlaceholders()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bar:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 13,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider:{
        height: 90,
        width: 50,
        backgroundColor: Colors.bgOffset,
        transform: [{ rotate: '26deg'}],
        opacity: 0.2
    }
})
