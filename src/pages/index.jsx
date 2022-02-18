import * as React from "react"
import { Outlet } from 'react-router-dom'
import Card from '../components/Card'

import Layout from "../components/layout"
import Seo from "../components/seo"
import PkProvider from '../context/PkContext'

const IndexPage = () => (
  <Layout>
    <Seo title="Discover" />
    <PkProvider>
      <Outlet/>
      <Card />
    </PkProvider>
  </Layout>
)

export default IndexPage
