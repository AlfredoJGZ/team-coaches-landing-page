import React from "react"
import Feature from "./feature"
import FeatureImg from "../images/Artboard.png"

function Content({ page }) {
  let homeContent = [
    {
      title: "Tools that your community needs",
      description:
        "Events, community project management education, OKR, metrics.",
      img: FeatureImg,
    },
    {
      title: "Any type of programs",
      description: "Educators, incubators, accelerators or enterprises",
      img: FeatureImg,
    },
    {
      title: "Give the value that they need",
      description: "One off for everything and more",
      img: FeatureImg,
    },
    {
      title: "Monitor everything",
      description: "User, startups, program dashboards",
      img: FeatureImg,
    },
    {
      title: "Support your startup",
      description: "Public profiles, progress, reportes, engagement",
      img: FeatureImg,
    },
  ]

  let productContent = [
    {
      title: "Community and events",
      img: FeatureImg,
    },
    {
      title: "Community and events",
      img: FeatureImg,
    },
    {
      title: "Community and events",
      img: FeatureImg,
    },
  ]

  let content

  switch (page) {
    case "home":
      content = homeContent
      break
    case "product":
      content = productContent
      break
    default:
      content = []
  }

  return content.map((feature, index) => (
    <Feature
      title={feature.title}
      desc={feature.description}
      img={feature.img}
      styles={feature.style}
      key={index}
    />
  ))
}

export default Content
