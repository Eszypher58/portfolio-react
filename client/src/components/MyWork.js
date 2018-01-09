import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import CodependiumImg from '../static/img/codependium.png';
import IfeltitImg from '../static/img/ifeltit_scaled.png';
import WhatiswrongwithmeImg from '../static/img/whatiswrongwithme_scaled.png';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Item,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';

const MyWork = (props) => {

        return (

            <div>

                <Segment
                
                textAlign='center'
                style={{ minHeight: document.body.clientHeight, padding: '1em 0em', backgroundColor: '#00ACC1'}}
                vertical
                >

                <NavContainer />

                <Container>

                <Header
                    as='h1'
                    content='THIS IS A SNIPPET OF MY PORTFOLIO'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                  />
                <Divider />

                <Item.Group>
                    <Item>
                    <Item.Image size='large' src={CodependiumImg} as='a' href='https://frozen-reef-87754.herokuapp.com/' target='_blank'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header style={{ fontSize: '3em' }}>Codependium</Item.Header>
                        <Item.Meta  style={{ fontSize: '2em' }}>Social bookmarking for all things code related</Item.Meta>
                        <Item.Extra>Built on MERN stack with MongoDB, Express, React, and NodeJS</Item.Extra>
                    </Item.Content>
                    </Item>

                    <Item>
                    <Item.Image size='large' src={WhatiswrongwithmeImg} as='a' href='https://secret-woodland-56466.herokuapp.com/' target='_blank'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header style={{ fontSize: '3em' }}>WhatIsWrongWithMe</Item.Header>
                        <Item.Meta  style={{ fontSize: '2em' }}>Innovative medical technology, a repository for digitized sound of your body</Item.Meta>
                        <Item.Extra>Built using Javascript, Materialize CSS, Jquery, and mySQL</Item.Extra>
                    </Item.Content>
                    </Item>

                    <Item>
                    <Item.Image size='large' src={IfeltitImg} as='a' href='https://eszypher58.github.io/IFeltIt/' target='_blank'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header style={{ fontSize: '3em' }}>IFeltIt</Item.Header>
                        <Item.Meta  style={{ fontSize: '2em' }}>Social earthquake visualization with Facebook integration</Item.Meta>
                        <Item.Extra>Built using Google Map API, Jquery, Bootstrap, Javascript, Facebook OAuth</Item.Extra>
                    </Item.Content>
                    </Item>
                </Item.Group>

                </Container>

                </Segment>

            </div>

        )

}

  export default MyWork;