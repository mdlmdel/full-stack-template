import React from 'react';
import { Grid } from 'semantic-ui-react'

import { deleteEntities } from '../actions/actions';
import { connect } from 'react-redux';
import ViewReportButton from './ViewReportButton';
import SaveReportButton from './SaveReportButton';
//import DeleteReportButton from './DeleteReportButton';

import '../css/GridViewSaveReport.css';

const GridViewSaveReport = () => (
  <Grid textAlign='center' columns={8}>
      <Grid.Row>
        <Grid.Column> 
        </Grid.Column> 
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <ViewReportButton / >
        </Grid.Column>
        <Grid.Column>
          <SaveReportButton />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
    </Grid.Row>
    
  </Grid>
)

//Use map state to props below
// This gives you the data that you can map over to display how you want
// this.props.entities.data
export default connect(
  state => ({
    entity: state.entities
  }),
  {
    deleteEntities
  }
)(GridViewSaveReport);