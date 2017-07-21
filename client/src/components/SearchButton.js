import React from 'react';
import { Button } from 'semantic-ui-react';

//const sizes = ['medium']

// Within buttons, had this and don't need it since 1 search occurs at a time: size={size} key={size}
const SearchButton = () => (
  <div>
    <Button primary className="ui left floated button">Search</Button>
  </div>
)

export default SearchButton