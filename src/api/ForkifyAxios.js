import axios from 'axios';

const ForkifyAxios = axios.create({
  baseURL: 'https://forkify-api.herokuapp.com/api/v2/recipes',
  params: {
    key: 'ede6e218-f69c-414e-955a-fbc42f89a7ee',
  },
  validateStatus: (status) => {
    return status == 200;
  },
});

export default ForkifyAxios;
