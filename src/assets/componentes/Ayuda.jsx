import Redes from './Redes'
import '../css/Ayuda.css'
import terpe from '../img/terpel.webp'
const Ayuda = () => {
  return (
    <div className="ayuda">
      <section className='logito'>
      <img src={terpe} alt="" />
      </section>
      <section className='enlaces'>
      <a href=""> ¿Nesecitas ayuda?</a>
      <br />
<a href=""> Manejo de datos personales web</a>
<br />
<a href=""> Terminos y condiciones</a>
      </section>
<section className='redes'>
<Redes></Redes>
</section>
    </div>
  )
}

export default Ayuda