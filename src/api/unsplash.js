import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Iq24H1fGOowrwdR9M4WLHN1dki--md4e1nbh_hEbzSw"
    }
});

