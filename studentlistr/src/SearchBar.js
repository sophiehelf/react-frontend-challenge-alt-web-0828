import React from 'react'
import ClassContainer from './ClassContainer'

class SearchBar extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
        <form>
        <input type="text" placeholder="Search" onChange={this.props.handleChange}/>
        </form>
		)
	}


}

export default SearchBar