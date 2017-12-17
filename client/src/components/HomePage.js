import React from 'react';
import {
  //Button,
  Container,
  //Divider,
  Grid,
  Header,
  Icon,
  //Image,
  //List,
  //Menu,
  Segment,
  //Visibility,
} from 'semantic-ui-react'
import NavContainer from '../containers/NavContainer';

const HomePage = (props) => {

        return (

            <div>

                <Segment
                
                textAlign='center'
                style={{ minHeight: document.body.clientHeight, padding: '1em 0em', backgroundColor: '#00ACC1'}}
                vertical
                >

                <NavContainer />

                <Container text>
                  <Header
                    as='h1'
                    content='HAO.VISION'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                  />
                  <Header
                    as='h2'
                    content="A FULL-STACK Web Developer's Landing Page"
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                  />
                  <Icon 
                    name='power'
                    style={{ fontSize: '2.5em', fontWeight: 'normal', color:'white'}}
                  />

            </Container>

            <Segment style={{ padding: '5em' }} vertical>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                    <Icon name='angle double left' style={{ fontSize: '2em' }} />
                      <p style={{ fontSize: '1.33em' }}>BACK</p>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                  <Icon name='angle double right' style={{ fontSize: '2em' }} />
                  <p style={{ fontSize: '1.33em' }}>FORWARD</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>

          </Segment>
            
            </div>

        )

}

export default HomePage;