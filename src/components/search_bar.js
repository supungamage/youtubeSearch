import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {term: ''};
  }
  handleInputChange (term) {
    this.setState({term});
    this.props.onInputChange(term);
  }
  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.handleInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
