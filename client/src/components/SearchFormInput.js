import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react';
// To get the data in your component, connect redux
import { connect } from 'react-redux';
import '../css/SearchFormInput.css';
import SearchButton from './SearchButton';
// import getEntities action
import { getEntities } from '../actions/actions';

//const sizes = ['large']



class SearchFormInput extends Component {
  state = {
    text: ''
  }
  _onChangeText = e => {
    this.setState({
      text: e.target.value 
    })
  }

 _handleSubmit = e => {
    e.preventDefault();
    this.props.getEntities(this.state.text);

}

  render() {
    return (
      <div>
      <Form onSubmit={this._handleSubmit}>
        <Form.Group widths='equal' >
          <Form.Field label='' control='input' onChange={this._onChangeText} placeholder='e.g., Leadership' 
          value={this.state.text}/>
        <SearchButton />
        </Form.Group>
        <Divider hidden />
      </Form>
      </div>
    )
  }
}

// export default SearchFormInput

//Use map state to props below
export default connect(
  state => ({
    entity: state.entities
  }),
  { getEntities }
)(SearchFormInput);

// Add above divider
/*<ul>
              {queries.data.results[0].queries.map((query, i) => (
                <li key={i}>
                  {query}
                </li>
              ))}
            </ul>*/

/** {sizes.map(size => (
      <Form size={size} key={size} >
        <Form.Group widths='equal' >
          <Form.Field label='' control='input' onChange={this._onChangeText} placeholder='e.g., Leadership' 
          value={this.state.text}/>
        </Form.Group>
        <Divider hidden />
      </Form>
    ))}*/