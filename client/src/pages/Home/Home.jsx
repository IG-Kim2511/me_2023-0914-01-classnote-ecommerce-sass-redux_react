import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
      <FeaturedProducts type="featured"/>
      <Categories/>
      {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home