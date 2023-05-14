import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, geoApiURL } from '../../API';

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null);

    // Handle Onchange function
    function handleOnchange(a) {
        setSearch(a);
        onSearchChange(a);
    };

    // Load Options function
    function loadOptions(inputValue) {
        return fetch(`${geoApiURL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err))
    };

    return (
        <AsyncPaginate placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnchange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;