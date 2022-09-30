import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Head from 'next/head'
import Nav from '../components/Nav'
import React from 'react'
import Carousel from '../components/Carousel'
<<<<<<< HEAD
=======
import StyleNav from '../components/Nav'
>>>>>>> 88dbc91 (Static Component Updated)

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
      {/* <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link> */}
      <div>
        <Head>
          <title>
            Task1
          </title>
          <link 
            rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          </link>
        </Head>
<<<<<<< HEAD
        <Link href="Navbar">
            <Nav>Nav</Nav>
        </Link>
=======
        <div> 
          <StyleNav>StyleNav</StyleNav>
        </div>
>>>>>>> 88dbc91 (Static Component Updated)
        <Link href="Navbar">
            <Carousel>Carousel</Carousel>
        </Link>

      </div>
    </>
  )
}

export default Index
