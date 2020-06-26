import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  //constructor setting the inital state and binding this
  constructor(props){
    super(props);
    this.state = {
      businesses : [],
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  //searchYelp method uses search method from Yelp component to deal with API
  //sets state depending on the resuls from the API
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then( businesses => {
      this.setState( {
        businesses : businesses,
      })
    });
  };

  //renders a SearchBar component and a BusinessList component for returning the results of the search
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
    )
  }
};

//exporting the component
export default App;
