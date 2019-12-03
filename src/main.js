import React from 'react'

import Home from './components/home/home'
import Contact from './components/contact/contact'
import NotFound from './components/not_found/not_found'

import { Container } from 'react-materialize'

import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='/*' component={NotFound}/>
            </Switch>
        </Container>
    </main>
)

export default Main