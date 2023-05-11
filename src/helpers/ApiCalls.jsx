import axios from 'axios';

export const getData = async (endpoint) => {
    // populate with fetch logic
    try {
        const response = await axios.get(endpoint);
        const data = response.data ?? {};
        
        return data; 
    } catch (error) {
        console.error(error);
    }

    return {};
}

export function fetchData() {
    // another way to make function
}