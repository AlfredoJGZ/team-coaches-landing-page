import React, { Component } from "react"
import Lottie from "react-lottie"
import animation from "../animations/hero-animation-home.json"

class LottieControl extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
    }

    return <Lottie options={defaultOptions} />
  }
}

export default LottieControl
