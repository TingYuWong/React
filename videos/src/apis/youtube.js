import axios from 'axios';

const KEY = 'AIzaSyAiVQ6ZcUhjl7qmzyxRg-UndxE6J-DhXOk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
