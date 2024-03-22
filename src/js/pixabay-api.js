const API_KEY = '43019622-51d65222f4845ee303d6eaf7d';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}