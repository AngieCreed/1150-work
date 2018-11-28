// Class Component
import styled from "styled-components";
import React, { Component } from 'react';
import { Form } from './Form';



const MovieWrapper = styled.div`
    background: lightgray;
    height: 100vh;
    width: 90vw;
`

export default class MovieApp extends Component {
    render() {
        return (
            <MovieWrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </MovieWrapper>
        )
    }
}