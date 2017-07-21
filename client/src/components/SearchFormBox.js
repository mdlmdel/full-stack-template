import React from 'react';
import { Grid } from 'semantic-ui-react'

import SearchFormInput from './SearchFormInput';
//import SearchButton from './SearchButton';


/**<Menu fluid vertical>
<Menu.Item className='header'>*/

const SearchFormBox = () => (

  <Grid textAlign='center' columns={4}>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <SearchFormInput />
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SearchFormBox