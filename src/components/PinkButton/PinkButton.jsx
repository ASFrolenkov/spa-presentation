import './pinkButton.scss'

const PinkButton = ({children, className}) => {
    return (
        <button className={`pinkButton dinpro ${className}`}>{children}</button>
    )
}

export default PinkButton