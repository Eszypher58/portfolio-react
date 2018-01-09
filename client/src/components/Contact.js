import React, { Component } from 'react';
import NavContainer from '../containers/NavContainer';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    List,
    Menu,
    Segment,
    Visibility,
  } from 'semantic-ui-react';

const Contact = (props) => {

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
                    content='CONNECT WITH ME'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                  />
                  <Divider />
                </Container>

                <Container text>

                <Segment style={{ padding: '5em' }} vertical>
                <Grid columns='equal' stackable>
                    <Grid.Row>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                            <Container>
                                <Icon name='github' style={{ fontSize: '4em' }}/>
                                <Label basic pointing as='a' href='https://github.com/Eszypher58' target='_blank'>Github</Label>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                            <Icon name='linkedin' style={{ fontSize: '4em' }} />
                            <Label basic pointing as='a' href='https://github.com/Eszypher58' target='_blank'>LinkedIn</Label>
                        </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                                <Icon name='twitter' style={{ fontSize: '4em' }} />
                                <Label basic pointing as='a' href='' target='_blank'>Twitter</Label>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                                <Icon name='facebook' style={{ fontSize: '4em' }} />
                                <Label basic pointing as='a' href='' target='_blank'>Facebook</Label>
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>
                        <Container>
                                <Icon name='google plus' style={{ fontSize: '4em' }} />
                                <Label basic pointing as='a' href='' target='_blank'>Google+</Label>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                </Segment>

                </Container>

                </Segment>

            </div>

        )




}

export default Contact;