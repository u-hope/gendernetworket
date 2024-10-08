import axios from 'axios';

//USER AND AUTH ROUTES

//SIGNIN
export const signin = org => {
    // API call to sign in a user
    return axios.post("https://gendernetworkethiopia-api.onrender.com/api/signin", JSON.stringify(org), {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        return response.data; // Return response data
    })
    .catch(err => {
        return err.response.data; // Return error response data
    })
}

//SIGNUP
export const signup = org => {
    // API call to sign up a user
    return axios.post("https://gendernetworkethiopia-api.onrender.com/api/signup", JSON.stringify(org),{
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
        return response.data; // Return response data
    })
    .catch(err => {
        return err.response.data; // Return error response data
    })
}

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
    // Storing JWT token in user's browser
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}
//fetch all data
export const getAllOrgs = (next)=> {
    axios.get("https://gendernetworkethiopia-api.onrender.com/api/data")
    .then(response => {
        console.log(response.data)
    })
}
//SIGNOUT -> REMOVING JWT TOKEN
export const signout = (next) => {
    // Removing JWT token upon signout
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");

        axios.get("https://gendernetworkethiopia-api.onrender.com/api/signout")
        .then(response => {
            console.log(response.data); 
            next(); 
        })
        .catch(err => console.log(err));
    }
};

//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
    // Checking if the user is authenticated
    if (typeof window === "undefined") {
        return false
    }
    if(localStorage.getItem("jwt"))
        return JSON.parse(localStorage.getItem("jwt"));
    else
        return false
}