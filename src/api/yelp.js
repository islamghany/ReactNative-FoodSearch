import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer 1QegfJ4jZjvlsOTqYhYwyoaLudFIwwMimoMdm7lsL4MMOxvupm2x4Zwa-OBEmjD4d6A2UUpAOsZ6I44b70SgFGWWmomj9EqZ-oM5aHxSzrDIKsJXVSg4NzJqJN8qXnYx'
  }
});