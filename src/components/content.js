import React, { useEffect, useState } from "react"
import Feature from "./feature"
import FeatureImg from "../images/Artboard.png"


function Content({ page }){

    let homeContent = [
        {
            title: "tools that your community needs",
            description: "Events, community project management education, OKR, metrics",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(70deg)", top:"10", right:"-80"} 
        },{
            title:"Any type of programs", 
            description:"educators, incubators, accelerators or enterprises",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(-10deg)", top:"-20", right:"25"} 
        },{
            title:"Any type of programs", 
            description:"educators, incubators, accelerators or enterprises",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(25deg)", top:"-10", right:"10"} 
      }
    ]

    let productContent = [
        {
            title: "Community and events",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(50deg)", top:"-15", right:"-80"} 
        },{
            title: "Community and events",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(-20deg)", top:"20", right:"15"} 
        },{
            title: "Community and events",
            img: FeatureImg,
            style: {zIndex: "-1", transform:"rotate(-60deg)", top:"-10", right:"-20"} 
        }
    ]

    let content

    switch (page) {
        case "home":
            content = homeContent
            break
        case "product":
            content = productContent
            break
        default: content = []
    }


    return(
        content.map((feature, index)=>
            <Feature
                title={feature.title}
                desc={feature.description}
                img={feature.img}
                styles={feature.style}
                key={index}
            />
        )    
    )
}

export default Content