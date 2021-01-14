import React, { Component }from 'react'
import Lottie from 'react-lottie'           
 
class LottieControl extends Component {

    state = {
        isPaused: true
    }

    componentDidUpdate(prevProps){
        if (this.props.isPaused !== prevProps.isPaused){
        
            
            this.setState({isPaused: !this.state.isPaused})
            setTimeout(() => {
                this.setState({isPaused: !this.state.isPaused})
                console.log("time out")
            }, 600)}
    }
        
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: false, 
            animationData: this.props.animation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }

    return(
        <Lottie 
            options={defaultOptions}
            isPaused={this.state.isPaused}
        />
    ) 
  }
}

export default LottieControl; 