"use client"
import Advisor from '@/components/Home/Advisor'
import Slider from '@/components/Home/Slider'
import Teams from '@/components/Home/Teams'
import Wings from '@/components/Home/Wings'
import DownSlider from '@/components/Home/downSlider'
import Layout from '@/components/customLayout/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>

     
     
      {/* <Teams /> */}
     
  <Layout>
  <Slider />
      <DownSlider/>
      <Wings />
      <Advisor />
  </Layout>
    </>
  )
}
