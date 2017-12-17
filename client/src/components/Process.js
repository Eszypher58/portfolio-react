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

const Process = (props) => {

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
                    content='HERE IS MY PROCESS'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                  />
                <Divider />
                </Container>

                <Segment style={{ padding: '5em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>PLAN</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                        <Header as='h3' style={{ fontSize: '2em' }}>BUILD</Header>
                        </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>TEST</Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>DEPLOY</Header>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                </Segment>

                </Segment>

            </div>

        )

}

  export default Process;