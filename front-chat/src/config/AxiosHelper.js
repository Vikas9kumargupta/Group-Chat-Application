import axios from "axios";

export const baseURL = process.env.REACT_APP_FRONT_API_URL;

console.log("Hello");
console.log("Base URL:", baseURL);

//export const baseURL = "http://localhost:8080"

export const httpClient = axios.create({
  baseURL: baseURL,
});

// Function to test API call with error handling
export const fetchData = async (endpoint) => {
  try {
    const response = await httpClient.get(endpoint);
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error Occurred:", error.message);
    
    // Handle different error types
    if (error.response) {
      // Server responded with a status outside 2xx
      console.error("Response Data:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // No response received from server
      console.error("No response received:", error.request);
    } else {
      console.error("Request Error:", error.message);
    }
    throw error; // Re-throw the error if needed
  }
};

