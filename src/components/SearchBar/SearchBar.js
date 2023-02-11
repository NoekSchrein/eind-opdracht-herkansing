import React from 'react'

const SearchBar = () => {
    // const [searchInput, setSearchInput] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="zoeken"
                id="search-bar"
            />
        </div>
    );
};

export default SearchBar;