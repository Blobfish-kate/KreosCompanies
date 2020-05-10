import React from 'react'
import {MDBDataTable} from 'mdbreact'
import styled from 'styled-components'

const Container = styled.div`
    margin: 20px;
    padding: 5px
`

const DatatablePage = (props) => {
    return (
        <Container>
            <MDBDataTable
                striped
                bordered
                hover
                data = {props.data}
            />
        </Container>
    )
}

export default DatatablePage