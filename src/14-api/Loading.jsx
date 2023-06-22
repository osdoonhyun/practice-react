import { useEffect, useState } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  const getArticles = async () => {
    setLoading(true);
    try {
      const { data, status } = await axios.get(address);
      if (status === 200) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return <>대기중...</>;
  }

  if (!articles) {
    return null;
  }
  return <>...</>;
}
