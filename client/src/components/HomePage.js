import React, { Component } from 'react'
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
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

class HomePage extends Component {

    render() {

        return (

            <div>

                <Segment
                
                textAlign='center'
                style={{ minHeight: document.body.clientHeight, padding: '1em 0em', backgroundColor: '#00ACC1'}}
                vertical
                >

                <Container fluid>
                  <Menu inverted pointing secondary style={{ border:'0px' }} size='large'>
                    <Menu.Item header>Hao.Vision</Menu.Item>
                    <Menu.Item position='right' as='a' active>Home</Menu.Item>
                    <Menu.Item as='a'>About Me</Menu.Item>
                    <Menu.Item as='a'>What I Do</Menu.Item>
                    <Menu.Item as='a'>Process</Menu.Item>
                    <Menu.Item as='a'>Contact</Menu.Item>
                  </Menu>
                  <Divider />
                </Container>

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


}

export default HomePage;