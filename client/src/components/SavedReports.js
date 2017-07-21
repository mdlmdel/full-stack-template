import React from 'react';
import { Grid, Table } from 'semantic-ui-react'

import { displayResults } from '../actions/actions';
import { saveEntities } from '../actions/actions';
import { deleteEntities } from '../actions/actions';
import { connect } from 'react-redux';
//import ViewReportButton from './ViewReportButton';
//import SaveReportButton from './SaveReportButton';

const SavedReports = ({entity, data, displayResults, deleteEntities}) =>  {
  if (!entity.data[2]) {
    return null;
  }
  return (
    <Grid textAlign='center' columns={2}>
      <Grid.Row>
      <Grid.Column>
        
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Search Term</Table.HeaderCell>
          <Table.HeaderCell>Publication</Table.HeaderCell>
          <Table.HeaderCell>Sentiment Score</Table.HeaderCell>
          <Table.HeaderCell>Sentiment Type</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      {entity.data.map(item => (
        <Table.Row key={item._id}>
          <Table.Cell>{item.query}</Table.Cell>
          <Table.Cell>hbr.org</Table.Cell>
          <Table.Cell>{item.score}</Table.Cell>
          <Table.Cell>{item.type}</Table.Cell>
          <Table.Cell>{new Date(item.date).toDateString()}</Table.Cell>
          <Table.Cell><button onClick={() => deleteEntities(item._id)}>Delete</button></Table.Cell>
        </Table.Row>
      ))}
        
      </Table.Body>
    </Table>
    </Grid.Column>
    </Grid.Row>
    </Grid> 
  )
}

//Use map state to props below
// This gives you the data that you can map over to display how you want
// this.props.entities.data
export default connect(
  state => ({
    entity: state.entities
  }),
  {
    displayResults, saveEntities, deleteEntities
  }
)(SavedReports);

/*
{entity.data.map((item, i) => (
      <Grid.Row key={i}>
      <Grid.Column> {item.query}
      </Grid.Column> 
      <Grid.Column>{item.averageScore}
      </Grid.Column>
      <Grid.Column>{item.date}
      </Grid.Column>
      <Grid.Column>
        <button onClick={() => deleteEntities(item._id)}>Delete</button>
      </Grid.Column>
      
    </Grid.Row>
    ))}
*/