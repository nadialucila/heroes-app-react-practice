import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/ui/NavBar'
import { MarvelPage } from '../components/marvel/MarvelPage'
import { DcPage } from '../components/dc/DcPage'
import { HeroPage } from '../components/heroes/HeroPage'

export const DashboardRoutes = () => {
  return (
    <React.Fragment>
        <NavBar />
        <div className='container mt-3'>
            <Switch>
                <Route exact path="/marvel" component={ MarvelPage } />
                <Route exact path="/dc" component={ DcPage } />
                <Route exact path="/heroe/:heroeId" component={ HeroPage } />
            </Switch>
        </div>
    </React.Fragment>
  )
}