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
    List,
    Menu,
    Segment,
    Visibility,
  } from 'semantic-ui-react';

  class AboutMe extends Component {

    render() {

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
                    content='Welcome'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                  />
                  <Divider />
                </Container>

                    <Segment style={{ padding: '5em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row>
                        <Grid.Column style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                            <Header as='h3' style={{ fontSize: '2em', textAlign:'center'}}>
                                <Icon name="user" />
                                About Me
                            </Header>
                            <p style={{ fontSize: '2em', textAlign:'justified' }}>
                                <span style={{ color:"red" }}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Cras at dictum diam, eu ornare purus. Pellentesque dui risus, efficitur id convallis eget, 
                                cursus tristique dui. Donec vel magna euismod neque tempor dignissim at vel felis. Vivamus 
                                porta efficitur dolor eget venenatis. Nulla consectetur massa erat, a tempus nisi pellentesque nec. 
                                In feugiat fringilla consectetur. Etiam in consequat velit, ac auctor erat. 
                                Maecenas lorem libero, interdum eu elementum eu, sollicitudin nec neque. 
                                Ut pharetra blandit mauris, in auctor massa sagittis et. Fusce lobortis nulla eget nibh 
                                tincidunt gravida. Sed feugiat dictum sapien nec dignissim. Mauris maximus auctor congue. 
                                Mauris blandit sed turpis nec posuere.
                            </p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '0em', paddingTop: '0em' }}>
                            <Container text>
                            <Image
                                bordered
                                rounded
                                fluid
                                src='https://pbs.twimg.com/profile_images/626949233/SquareCat.jpg'
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


  }

  export default AboutMe;