//import React from 'react';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// To get the data in your component, connect redux
import { connect } from 'react-redux';
import { displayResults } from '../actions/actions';

class ViewReportButton extends Component {

 _handleSubmit = e => {
    e.preventDefault();
    this.props.displayResults(this.props.entity.data.docSentiment, this.props.entity.query);

}

  render() {
    console.log("After clicked on view report", this.props.entity);
    return (
      <div>
      <Button primary onClick={this._handleSubmit}>View Report</Button>
      </div>
    )
  }
}

//export default ViewReportButton

//Use map state to props below
export default connect(
  state => ({
    entity: state.entities
  }),
  { displayResults }
)(ViewReportButton);