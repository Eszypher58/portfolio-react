import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import HtmlImg from '../static/img/col-html.png';
import CssImg from '../static/img/col-css.png';
import JavaScriptImg from '../static/img/col-js.png';
//import BootstrapImg from '../static/img/col-js.png';
import JqueryImg from '../static/img/col-jquery.png';
import NodeImg from '../static/img/col-node.png';
import ReactImg from '../static/img/col-react.png';
import DatabaseImg from '../static/img/col-database.png';
import PythonImg from '../static/img/col-python.png';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';

const WhatIDo = (props) => {

        return (

            <div>

                <Segment
                
                textAlign='center'
                style={{ minHeight: window.screenY, padding: '1em 0em', backgroundColor: '#00ACC1'}}
                vertical
                >

                <NavContainer />

                <Container>

                <Header
                    as='h1'
                    content='THIS IS WHAT I DO'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                  />
                <Divider />
                </Container>

                <Segment style={{ padding: '5em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={HtmlImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>HTML5</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded
                                fluid
                                src={CssImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>CSS3</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={JavaScriptImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>JAVASCRIPT</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded
                                fluid
                                src={JqueryImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>JQUERY</Header>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={NodeImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>NODEJS</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded
                                fluid
                                src={ReactImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>REACT</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={DatabaseImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>MySQL / MongoDB</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Image
                                bordered
                                rounded
                                fluid
                                src={PythonImg}
                            />
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>PYTHON</Header>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>

                </Segment>

            </div>

        )

}

  export default WhatIDo;