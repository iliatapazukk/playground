import style from './style.module.css';
// import logo from '../../assets/img/logo.svg'
console.log('!!!', style)

const Layout = ({
                  title,
                  description,
                  urlBg = false,
                  colorBg = false,
                }) => {
  const bgColor = colorBg ? { backgroundColor : `${colorBg}` } : {};
  const bgImage = urlBg ? { backgroundImage: `url(${urlBg})`} : {};

  return (
    <section className={style.root} style={{...bgImage, ...bgColor}}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            { title && (
              <h3>{title}</h3>
            )}
            <span className={style.separator}/>
          </div>
          <div className={`${style.desc} ${style.full}`}>
            {description && (
              <p>{description}</p>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
