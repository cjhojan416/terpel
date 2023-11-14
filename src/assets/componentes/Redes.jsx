import facebook from '../img/facebook.png'
import teitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'
import linkedin from '../img/linkedin.png'

const Redes = () => {
  return (
    <div className='redes'>
        <a href="https://www.facebook.com/Terpel">
            <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/TerpelCol">
            <img src={teitter} alt="" />
        </a>
        <a href="https://www.instagram.com/terpelcol/">
            <img src={instagram} alt="" />
        </a>
        <a href="https://www.youtube.com/user/TerpelColombia">
            <img src={youtube} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/terpel/?originalSubdomain=co">
            <img src={linkedin} alt="" />
        </a>
    </div>
  )
}

export default Redes