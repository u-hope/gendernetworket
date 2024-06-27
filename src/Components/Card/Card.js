import './Card.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import Search from '../SearchBar/Search';
// import { response } from 'express';

// Card component
function Card(props) {

  //for fetching and storing data
  const [organizations, setOrganizations] = useState([]);
  // const base_url="http://localhost:8000/api/data";

  const [search, setSearch] = useState("");
  const [value,setValue] = useState("");
  const [data,setData] = useState([]);
  // const [isActive, setIsActive] = useState(false);
  

  useEffect(() => {
    axios.get("http://localhost:8000/api/data")
      .then(organizations => {
        setOrganizations(organizations.data);
        console.log(organizations.data)
      })
      .catch(error =>
        console.error('Error fetching notes:', error));
  }, []);
 
  const handleSearchStateChange = (isActive) => {
    // You can now access the isSearchActive state from the SearchBar component
    console.log('Search bar state changed:', isActive);
  };

  //Change
  const handleChange = (event) => {
    setValue (event.target.value);
    console.log("Sort function call");
}
//Search
 const handleSearch = (event)=>{
  event.preventDefault();
  return axios
  .get(`http://localhost:8000/api/orglist?search=${search}`)
  .then((response)=>{
    setData(response.data)
    setValue("");
  })
  .catch((err)=>console.log(err));
 }
 
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = organizations.slice(firstIndex, lastIndex);


  return (
    // List of Cards
    <div>

      <h1 className='cardSectionTitle'>Organizations</h1>
      <div className='searchSortContainer'>
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
            <form >
            <input input
                type='text'
                className='search'
                placeholder='Search Organization Name'
                onChange={(e)=> setValue(e.target.value)}
                value={value}
            />
            <button onClick={handleSearch}>Search</button>
            </form>
        </div>
      </div>

      <div className='cardSection'>
        
        {data.length===0? (records.filter(organization => organization.region.toLowerCase().includes(search) || organization.name.toLowerCase().includes(search)
).map(organization => (
          <div className='cardContainer'>

            <div className='cardLeft'>
              <img src={props.cardImg} alt='Logo' className='cardImg' />
            </div>

            <div className='cardRight'>

              <div className='cardName'>
                <span className='cardLable'>Name:</span>
                <span className='cardText'>{organization.name}</span>
              </div>


              <div className='cardBottom'>
                <div className='cardName'>
                  <span className='cardLable'>Email:</span>
                  <span className='cardText'>{organization.email}</span>
                </div>
                <div className='cardName'>
                  <span className='cardLable'>Region:</span>
                  <span className='cardText'>{organization.region}</span>
                </div>
              </div>
              <div className='cardExpanded'>
              <div className='cardHomeName'>
                  <span className='cardLable'>Mission:</span>
                  <span className='cardMission'>{organization.mission}</span>
                </div>
                <div className='cardHoverName'>
                  <span className='cardLable'>Vision:</span>
                  <span className='cardMission'>{organization.vision}</span>
                </div>
                <div className='tag'>Region:<span> {organization.region}</span> Contact: <span>{organization.contact}</span></div>
              </div>
            </div>

          </div>
        ))):(data.orglist.map(item => (
          <div className='cardContainer'>

            <div className='cardLeft'>
              <img src={props.cardImg} alt='Logo' className='cardImg' />
            </div>

            <div className='cardRight'>

              <div className='cardName'>
                <span className='cardLable'>Name:</span>
                <span className='cardText'>{item.name}</span>
              </div>


              <div className='cardBottom'>
                <div className='cardName'>
                  <span className='cardLable'>Email:</span>
                  <span className='cardText'>{item.email}</span>
                </div>
                <div className='cardName'>
                  <span className='cardLable'>Region:</span>
                  <span className='cardText'>{item.region}</span>
                </div>
              </div>
              <div className='cardExpanded'>
              <div className='cardHomeName'>
                  <span className='cardLable'>Mission:</span>
                  <span className='cardMission'>{item.mission}</span>
                </div>
                <div className='cardHoverName'>
                  <span className='cardLable'>Vision:</span>
                  <span className='cardMission'>{item.vision}</span>
                </div>
                <div className='tag'>Region:<span> {item.region}</span> Contact: <span>{item.contact}</span></div>
              </div>
            </div>

          </div>
        )))}


      </div>
      <Pagination
        totalRecords={organizations.length}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )

}

export default Card;








