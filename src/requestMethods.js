import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTU3ZTQ3YWQ1NDgwOGFiYjk5NTI2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTkyNzMxMSwiZXhwIjoxNzEwMDEzNzExfQ.uJKRCqE6Bb0hYO43l81FH2vpBpH19pzNMl3HO7BBhUc"



export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });