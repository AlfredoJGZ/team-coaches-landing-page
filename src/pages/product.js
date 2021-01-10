import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Customers from "../components/customers"
import Feature from "../components/feature"
import Footer from "../components/feature"
import Content from "../components/content"

const ProductPage = () => (
  <Layout>
    <SEO />
    <Header page="product" />
    <Content page="product" />
  </Layout>
)

export default ProductPage
