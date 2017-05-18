import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtists extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const val = event.target.value;
    this.setState( {
      inputValue: val
    })
  }



  render() {
    const filteredArtists = this.props.artists.filter((artist) => {
      return artist.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1;
    });
    return (
      <div>
        <FilterInput handleChange={ this.handleChange } />
        <Artists artists={ filteredArtists }/>
      </div>
    )
  }
}
export default FilterableArtists;
