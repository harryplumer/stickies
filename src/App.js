import React, { Component } from 'react';
import {Grid, Container, Header} from 'semantic-ui-react'
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
 render() {
  return (
    <Container>
      <Grid centered>
        <Grid.Column width={10}>
          <Header as="h1" textAlign="center" style={{marginTop: "30px", marginBottom: "10px"}}>Welcome To Hank's Stickies</Header>
          <Header as="h3" textAlign="center" style={{marginBottom: "10px"}}>Add A Note</Header>
          <StickyForm editing={false} />
        </Grid.Column>
        <Grid.Column width={14}>
          <StickyList />
          <Footer />
        </Grid.Column>
      </Grid>
    </Container>
    )
  }
}

export default App;