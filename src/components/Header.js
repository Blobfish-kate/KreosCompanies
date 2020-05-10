import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    text-align: center;
    background-color: whitesmoke;
`

const Header = () => {
    return (
        <Container>
            <h1><strong>Kreos Portfolio Companies</strong></h1>
        </Container>
    )
}

export default Header