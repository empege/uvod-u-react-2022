const Article = ({ title, src, text }) => {

  function handleClick() {
    console.log('nestoo');
  }
  return (
    <article
      className="m-article"
      style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}
    >
      <h3 className="m-article__title">{title}</h3>
      <div className="m-article__content">
        <img
          src={src}
          width='250'
          alt={title}
        />
        <p onClick={handleClick} style={{ lineHeight: '2' }}>{text}</p>
      </div>
    </article>
  );
};

export default Article