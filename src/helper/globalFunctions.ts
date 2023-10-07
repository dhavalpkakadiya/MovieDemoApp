import axios from 'axios';
import { api } from './apiConstants';

export const makeAPIRequest = ({
  method,
  url,
  data,
  baseURL,
  params,
}: any) =>
  new Promise(async (resolve, reject) => {
    const apiHeader = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDhiNGViYjU3NTVmN2VjM2Q4NTI4ZWNlYzAwZjNjZSIsInN1YiI6IjY1MWZmMjQzOTY3Y2M3MzQyOTYwMTBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.soTopg6lzs5WzaMYMNo8L4eW3hOwis-Jqfjbh4K00b0',
    };

    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers: apiHeader,
      params,
    };

    axios(option)
      .then(async (response: { status: number }) => {
        if (response?.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error: object) => {
        reject(error);
      });
  });
