import axios from "axios";

// All the client request to the API will be defined in this file.
export default {
  getProducts: function(query) {
    return axios.get("/api/gifts", { params: { q: query } });

  }
};