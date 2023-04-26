import './logo.scss'
import logo from '../icons/logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <button className="logo__icon">
                <img src={logo} alt="icon" />
            </button>
        </div>
    )
}

export default Logo;