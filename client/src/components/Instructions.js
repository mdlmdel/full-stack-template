import React from 'react';
import { Grid, Container } from 'semantic-ui-react'

import '../css/Instructions.css';

// ContainerExampleText
const Instructions = () => (
  <Grid.Row textAlign='justified'>
    <Grid.Column>
  <Container text>
        <p className="Instructions Instructions-text">Enter the entity you want to analyze, and click "Select Entity." Senticord will use the IBM Watson 
          AlchemyLanguage API to perform sentiment analysis on the term you search for as it appears 
          on the home page of the Harvard Business Review. 
        </p>
  </Container>
  </Grid.Column>
  </Grid.Row>
)

export default Instructions
