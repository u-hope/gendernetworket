import { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import profileImg from '../../Img/logo.png';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({
    organizationName:'',
    email: '',
    phoneNumber: '',
    vision: '',
    mission: '',
    region: '',
    organizationType: '',
    areaOfExpertise: '',
  });
  // const { userId } = useParams();
  const [orgId, setOrgId] = useState(null);

  
  useEffect(() => {
    // Retrieve the org_id from session storage
    const storedOrgId = sessionStorage.getItem('org_id');
    setOrgId(storedOrgId);

    // Fetch profile data when orgId changes
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/profile/${storedOrgId}`);
        setProfile(response.data);
        
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    if(setOrgId){
    fetchProfile();
    }
  }, [orgId]);


  if (!profile) {
    return <div>Loading...</div>;
  }
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.put(`http://localhost:8000/api/profile/${orgId}`, profile); 
      console.log('Profile updated successfully:', profile);
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error saving profile data:', error.response?.data);
      // Handle errors appropriately (e.g., show an error message)
    }
  };
  return (
    <div className="profile-top">
    <div className="profile-container">
      <h1 className="profile-header">Profile</h1>
      <div className="profile-wrapper">
        <div className="profile-left">
          <img className="profile-img" alt="Profile Img" src={profileImg} />
        </div>
        <div className="profile-right">
          <form className="profile-form">
            <div className="form-group">
              <label className="profile-label">Organization Name</label>
              <input
                className="profile-input"
                name="organizationName"
                placeholder={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="profile-label">Email</label>
              <input
                className="profile-input"
                name="email"
                type="email"
                placeholder={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="profile-label">Phone Number</label>
              <input
                className="profile-input"
                name="phoneNumber"
                type="tel"
                placeholder={profile.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="profile-label">Region</label>
              <select
                className="profile-input"
                name="region"
                value={profile.region}
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
            <div className="form-group">
            <label className="profile-label">Mission</label>
                <textarea
                    className="profile-input mission"
                    name="mission"
                    placeholder={profile.mission}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
            <label className="profile-label">Vision</label>
                <textarea
                    className="profile-input mission"
                    name="vision"
                    placeholder={profile.vision}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
              <label className="profile-label">Organization Type</label>
              <select
                className="profile-input"
                name="organizationType"
                value={profile.organizationType}
                onChange={handleChange}
              >
                <option value="Government">Government</option>
                <option value="Private">Private</option>
                <option value="Non-Profit">Non Profit</option>
              </select>
            </div>
            <div className="form-group">
              <label className="profile-label">Area of Expertise</label>
              <input
                className="profile-input"
                name="areaOfExpertise"
                placeholder={profile.intervention}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="profile-submit-btn">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
