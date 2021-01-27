import React, { useContext } from 'react'
import { shade } from 'polished';
import Swicth from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

import { Navbar, NavItem, Row } from 'react-materialize'

import { NavLink } from 'react-router-dom'

function Header(props) {
    const { colors, title } = useContext(ThemeContext)
    return (
        <Container>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <Swicth
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header