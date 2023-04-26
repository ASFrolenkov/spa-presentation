import blueBubble from '../imgs/blue_bubble.png'
import pinkBubble from '../imgs/pink_bubble.png'

import './bubbles.scss'

const Bubbles = () => {
    return (
        <div className="bubbles">
            <div className="bubbles_blue">
                <img src={blueBubble} alt="blue"/>
                <img src={blueBubble} alt="blue"/>
                <img src={blueBubble} alt="blue"/>
                <img src={blueBubble} alt="blue"/>
                <img src={blueBubble} alt="blue"/>
            </div>
            
            <div className="bubbles_pink">
                <img src={pinkBubble} alt="pink"/>
                <img src={pinkBubble} alt="pink"/>
                <img src={pinkBubble} alt="pink"/>
            </div>
        </div>
    )
}

export default Bubbles