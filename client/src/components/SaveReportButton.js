//import React from 'react';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// To get the data in your component, connect redux
import { connect } from 'react-redux';
import { saveEntities } from '../actions/actions';

class SaveReportButton extends Component {

 _handleSubmit = e => {
    e.preventDefault();
    this.props.saveEntities(this.props.entity.data.docSentiment, this.props.entity.query);

}

  render() {
    console.log("This starts here", this.props.entity);
    return (
      <div>
      <Button primary onClick={this._handleSubmit}>Save Report</Button>
      </div>
    )
  }
}

//export default SaveReportButton

//Use map state to props below
export default connect(
  state => ({
    entity: state.entities
  }),
  { saveEntities }
)(SaveReportButton);