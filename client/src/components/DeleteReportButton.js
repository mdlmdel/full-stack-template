import React from 'react';
import { Button } from 'semantic-ui-react';
import { deleteEntities } from '../actions/actions';

class DeleteReportButton extends Component {

  _handleSubmit = e => {
    e.preventDefault();
    this.props.deleteEntities(this.props.entity.data.docSentiment, this.props.entity.query);

}

  render() {
    console.log("This starts deleting here", this.props.entity);
    return (
      <div>
      <Button primary onClick={this._handleSubmit}>Delete Report</Button>
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
  { deleteEntities }
)(DeleteReportButton);