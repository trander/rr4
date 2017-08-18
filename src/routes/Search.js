import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            Search 
            {new URLSearchParams(location.search).get('keyword') }
        </div>
    );
};

export default Search;Search