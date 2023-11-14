import ubicacion from '../img/ubicacion.png'
import mensaje from '../img/mensaje.png'
import llamada from '../img/llamada.png'
import  '../css/Contacto.css'

const Contactos = () => {
  return (
    <div className='contac'>
      <h4>
        CONTACTO
      </h4>
      <section className='oficina'>
      <img src={ubicacion} alt="" />
      <p>
        oficina corporativa <br />
        PBX (571) 326 78 79 FAX 376 97 21 <br />
        Cr 7 No. 75 - 51 Bogota - Colombia
      </p>
      </section>
      <section  className='correo'>
      <img src={mensaje} alt="" />
      <p>
        Servicioalcliente@terpel.com
      </p>
      </section>
      <section className='telefono'>
        <img src={llamada} alt="" />
        <p>
          01 8000 518 555 O #462
        </p>
      </section>

    </div>
  )
}

export default Contactos