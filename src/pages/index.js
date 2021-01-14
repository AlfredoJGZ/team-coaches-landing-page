import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Customers from "../components/customers"
import Content from "../components/content"
import Footer from "../components/feature"
import Animation from "../components/animation"
import MenuClose from '../animations/menu-close.json'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header page="home" />
    <Customers />
    <Content page="home"/>
  </Layout>
)

export default IndexPage
