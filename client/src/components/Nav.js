import React from 'react';
import {Link} from 'react-router-dom';
import {
    Menu,
    Container,
    Divider,

} from 'semantic-ui-react';

const Nav = (props) => {

    return (

        <Container fluid>
        <Menu inverted pointing secondary style={{ border:'0px' }} size='large'>
          <Menu.Item header>Hao.Vision</Menu.Item>
          <Menu.Item position='right' as={Link} to="/" active>Home</Menu.Item>
          <Menu.Item as={Link} to="/aboutme">About Me</Menu.Item>
          <Menu.Item as={Link} to="/whatido">What I Do</Menu.Item>
          <Menu.Item as={Link} to="/process">Process</Menu.Item>
          <Menu.Item as={Link} to="/mywork">Process</Menu.Item>
          <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
        </Menu>
        <Divider />
      </Container>

    )

}

export default Nav;