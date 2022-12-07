const sortNewsByImage = (news: NewsReponse) => {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNews = {
    ...news,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNews;
};

export default sortNewsByImage;
