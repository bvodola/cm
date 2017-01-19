import React, { Component } from 'react';
import SearchResult from './SearchResult.jsx';

class SearchResults extends Component {

	render() {
		return (
			<div className="search-results">
        <SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
			</div>
		);
	}
}

export default SearchResults;
