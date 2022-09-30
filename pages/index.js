import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Head from 'next/head'
import Nav from '../components/Nav'
import React from 'react'
import Carousel from '../components/Carousel'

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
            Static Component
          </title>
          <link 
            rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          </link>
        </Head>
        <div> 
          <Nav>Nav</Nav>
        </div>
        <Link href="Navbar">
            <Carousel>Carousel</Carousel>
        </Link>

      </div>
    </>
  )
}

export default Index
