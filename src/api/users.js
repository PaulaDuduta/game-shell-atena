import axios from 'axios';

const baseUrl = 'https://cool-subdued-spike.glitch.me/';

export const client = axios.create({
  baseURL: baseUrl,
});
