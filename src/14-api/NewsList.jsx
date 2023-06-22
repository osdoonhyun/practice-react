import usePromise from './Hook/usePromise';

export default function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://news.org/v2..${query}&apiKey=${API_KEY}`);
  }, [category]);

  if (loading) {
    return <>대기중...</>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <>에러 발생...</>;
  }

  const { articles } = response.data;
  return <>...</>;
}
