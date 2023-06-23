import React from 'react'
import {SideNav, Map, Salon, BottomNav} from '../../components/User Navigation/index.js'

const Dashboard = () => {

  return (
    <>
    <div className="container">
      <SideNav/>
      <Map/>
      <Salon/>
      <BottomNav/>
    </div>
    </>
  )
}

export default Dashboard