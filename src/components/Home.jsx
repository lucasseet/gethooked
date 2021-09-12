import Navbar from './Navbar'
import Footer from './Footer'
import HomeFeaturedBanner from './HomeFeaturedBanner';
import HomeJoinCommunity from './HomeJoinCommunity';
import HomeFishingSpot from './HomeFishingSpot';
import React from 'react';


export default function Home() {

  
   
    return (
        <React.Fragment>
    <Navbar/>
    <HomeFeaturedBanner/>
    <HomeJoinCommunity/>
    <HomeFishingSpot/>
    <Footer/>
      </React.Fragment>
    )
  }
  