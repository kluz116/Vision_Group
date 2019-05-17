// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "http://newsapi.org/v2/top-headlines?country=us&apiKey=6cce81f03f1741b28eeaad17159c8fc8";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}