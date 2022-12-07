type Props = {
  article: Article
};

const Article = ({ article }: Props) => {
  console.log(article)
  return (
    <article>
      <img 
        src={article.image ? article.image : '/default-thumbnail-image.jpeg'}
        alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"
      />

      <div className="mt-4">
        <div>
          <h2 className="text-slate-900 dark:text-gray-100 text-2xl font-bold w-full truncate text-ellipsis overflow-hidden ...">{article.title}</h2>
          <section className="my-3">
            <p className="text-slate-900 dark:text-gray-100">{article.description}</p>
          </section>
        </div>
      </div>
    </article>
  )
}

export default Article