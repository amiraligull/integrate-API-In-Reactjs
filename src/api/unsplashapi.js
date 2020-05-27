/** @format */

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 00934909ec31d6bcdd0738803104b4f83b15de8c8733624fe0e0fa7f7c13feb7",
  },
});
