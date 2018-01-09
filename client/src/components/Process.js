import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import PlanImg from '../static/img/planning.png'
import BuildImg from '../static/img/build.png'
import TestImg from '../static/img/test.png'
import DeployImg from '../static/img/deploy.png'
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
                style={{ minHeight: document.body.clientHeight, padding: '1em 0em', backgroundColor: '#00ACC1'}}
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
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <Icon name='edit' style={{ fontSize: '2em' }} />PLAN
                            </Header>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={PlanImg}
                            />
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            <Icon name='code' style={{ fontSize: '2em' }} />BUILD
                        </Header>
                        <Image
                                bordered
                                rounded 
                                fluid
                                src={BuildImg}
                            />
                        </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <Icon name='checkmark' style={{ fontSize: '2em' }} />TEST
                            </Header>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={TestImg}
                            />
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <Icon name='could upload' style={{ fontSize: '2em' }} />DEPLOY
                            </Header>
                            <Image
                                bordered
                                rounded 
                                fluid
                                src={DeployImg}
                            />
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