import axios from 'axios';

const url = 'https://api.github.com/users/';

const options = {
  method: 'GET/POST',
  params: {format: 'json'},
};

export const getUser = async (submittedUser) => {
  try {
    const response = await axios.get(url + submittedUser, options);
    return response;
  } catch (error) {
    console.error(error);
  }
};
