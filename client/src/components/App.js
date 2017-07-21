import React, { Component } from 'react';

import SearchFormBox from './SearchFormBox.js';
//import ViewReportButton from './ViewReportButton';
//import SaveReportButton from './SaveReportButton'; 
import Instructions from './Instructions';
import GridViewSaveReport from './GridViewSaveReport';
import Results from './Results';
import SavedReports from './SavedReports';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-background">   
        <h1>SentiCord: Customized Trending Sentiment Analysis</h1>
        <h2>Select an organization, brand, public figure, or business concept to analyze</h2>
      <Instructions />
      <SearchFormBox />
      <GridViewSaveReport />
      <Results />
      <SavedReports />
      </div>
    );
  }
}

export default App;
