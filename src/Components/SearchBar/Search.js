import React from 'react';
import { useState } from 'react';
import './Search.css';

const Search = ({ setSearch }) => {

    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isSortActive, setIsSortActive] = useState("");
    const [value,setValue] = useState("");

    const handleSearch = (event) => {
        const setSearch = event.target.value;
        const searchValue = event.target.value.trim();
        setIsSearchActive(false ? searchValue === "" : true);

        console.log('Search bar state changed:', isSearchActive);
    }
    const handleChange = (event) => {
        setIsSortActive (event.target.value);
        console.log("Sort function call", isSortActive);
    }
    return (
        <div className='searchMain'>
            <form className='sortForm'>
                <div className="formGroup typeOfOrg">
                    {/* <label className="profile-label">Organization Type</label> */}
                    <select
                        className="profileInput"
                        name="organizationType"
                        placeholder="Organization Type"
                        onChange={handleChange}
                    >
                        <option value="Government">Government</option>
                        <option value="Private">Private</option>
                        <option value="Non-Profit">Non Profit</option>
                    </select>
                </div>
                <div className="formGroup">
                    {/* <label className="profile-label">Region</label> */}
                    <select
                        className="profileInput"
                        name="Region"
                        placeholder="Region"
                        onChange={handleChange}
                    >
                        <option value="Addis Ababa">Addis Ababa</option>
                        <option value="Afar">Afar</option>
                        <option value="Amhara">Amhara</option>
                        <option value="Benishangul-Gumuz">Benishangul-Gumuz</option>
                        <option value="Central Ethiopia">Central Ethiopia</option>
                        <option value="Dire Dawa">Dire Dawa</option>
                        <option value="Gambela">Gambela</option>
                        <option value="Harari">Harari</option>
                        <option value="Oromia">Oromia</option>
                        <option value="Sidama">Sidama</option>
                        <option value="Somali">Somali</option>
                        <option value="Non-South Ethiopia">South Ethiopia</option>
                        <option value="South West Ethiopia Peoples">South West Ethiopia Peoples</option>
                        <option value="Tigray">Tigray</option>

                    </select>
                </div>
            </form>

            <input input
                type='text'
                className='search'
                placeholder='Search Organization Name'
                onChange={(e)=> setValue(e.target.value)}
                value={value}
            />
        </div>

    )
}
export default Search;