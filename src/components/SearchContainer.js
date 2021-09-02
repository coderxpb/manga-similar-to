import React from 'react';

const SearchContainer = (props) => {
	return (
		<div className="search-container">
			<p className="search-container-text">Manga similar to</p>
			<input className="search-container-input" type="search" label="manga-search" placeholder="enter manga name here" ref={e=>(e||{}).onsearch=props.onSearched}/>
		</div>
	)
}

export default SearchContainer