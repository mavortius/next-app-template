import React from 'react'
import Head from 'next/head'
import VercelLogo from '../assets/vercel.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    <main>
      <VercelLogo />
      <h1>ReactJS Basic Template</h1>
      <p>A ReactJS + NextJS project template.</p>
    </main>
  </Container>
)

export default Home
