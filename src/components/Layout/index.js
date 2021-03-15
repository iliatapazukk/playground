import style from './style.module.css';

const Layout = ({
                  title,
                  urlBg = false,
                  colorBg = false,
                  children
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
          { children && (
          <div className={`${style.desc} ${style.full}`}>
              {children}
          </div> )
          }
        </article>
      </div>
    </section>
  )
}

export default Layout;
