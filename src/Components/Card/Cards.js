import './Card.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

function Cards(props) {
  const [organizations, setOrganizations] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [emptySearch, setEmptySearch] = useState("");

  useEffect(() => {
      axios.get("https://gendernetworkethiopia-api.onrender.com/api/data")
          .then(response => {
              setOrganizations(response.data);
              setDataLoaded(true);
          })
          .catch(error => {
            console.error('Error fetching notes:', error);
            setDataLoaded(false);
        });
  }, []);

  const handleSearch = (event) => {
      setSearch(event.target.value.toLowerCase());
  };

  const handleSort = (event) => {
      setSortBy(event.target.value);
  };
  const handleRegionSort = (event) => {
      setEmptySearch(event.target.value)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6);

  const filteredOrganizations = organizations.filter(organization =>
      organization.name.toLowerCase().includes(search)
  );

  const sortedOrganizations = filteredOrganizations.sort((a, b) => {
      if (sortBy === "name") {
          return a.name.localeCompare(b.name);
      } else if (sortBy === "region") {
          return a.region.localeCompare(b.region);
      }
      return 0;
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = sortedOrganizations.slice(firstIndex, lastIndex);

  return (
      <div className='cardContainerSpace'>
          <h1 className='cardSectionTitle' style={{fontWeight:"750",color:" #00859B"}}>
              Organizations
          </h1>
          <div className='searchSortContainer'>
              <div className='searchMain'>
                 <div className='searchSort'>
                  <select
                      className="profileInput"
                      name="sort"
                      placeholder="Sort By"
                      onChange={handleSort}
                  >
                      <option value="">Government</option>
                      <option value="name">Private</option>
                      <option value="region">Non Profit</option>
                  </select>
                  </div>
                  <div className='searchSearch'>   
                  <input
                      type='text'
                      className='search'
                      placeholder='Search Organization Name'
                      onChange={handleSearch}
                      value={search}
                  />
                  </div>
              </div>
          </div>

          <div className='cardSection'>
          {dataLoaded ? ( 
            filteredOrganizations.length > 0 ? (
                  records.map(organization => (
                      <div className="cardContainer" key={organization.id}>
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
                                      <span className='cardLable'>Region:</span>
                                      <span className='cardText'>{organization.region}</span>
                                  </div>
                                  <div className='cardName'>
                                      <span className='cardLable'>Email:</span>
                                      <span className='cardText'>{organization.email}</span>
                                  </div>
                              </div>
                             
                          </div>
                          <div className='cardExpanded'>
                                  <div className='cardHomeName' style={{marginBottom:"8px"}}> 
                                      <span className='cardLable'>Mission:</span>
                                      <span className='cardMission'>{organization.mission}</span>
                                  </div>
                                  <div className='cardHoverName' style={{marginBottom:"8px"}}>
                                      <span className='cardLable'>Vision:</span>
                                      <span className='cardMission'>{organization.vision}</span>
                                  </div>
                                  <div className='tag' style={{textAlign:"left"}}>
                                    Region:<span> {organization.region}</span> 
                                    <br/>
                                    Contact: <span>{organization.contact}</span>
                                    <br/>
                                    Email: <a style={{color:"#fff"}}>{organization.email}</a>
                                 </div>
                              </div>
                      </div>
                  ))
              ) : (
                  <div style={{color:"black", fontSize:"5vh",fontWeight:"700", margin:"auto auto"}}>
                      No organization is registered with the name :  
                      <span style={{ color:"red"}}>
                          &nbsp; {search}
                      </span>
                  </div>
              )
          ):(
            <div className="loader" style={{ margin:"auto auto"}}>
            <span style={{color:"#00859B", fontSize:"5vh",fontWeight:"700"}}>Loading</span>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
          )}
          </div>

          <Pagination
              totalRecords={filteredOrganizations.length}
              recordsPerPage={recordsPerPage}
              setCurrentPage={setCurrentPage}
          />
      </div>
  );
}

export default Cards;