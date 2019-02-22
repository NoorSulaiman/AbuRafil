import axios from 'axios';
import { DATA_FETCHED } from '../types';

const dataFetched = data => ({
  type: DATA_FETCHED,
  data,
});

export const fetchData = () => dispatch => {
  console.log('hello');
  axios.get('../../dummyData.json').then(res => dispatch(dataFetched(res)));
};
