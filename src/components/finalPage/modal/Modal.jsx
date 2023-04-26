import './modal.scss'

import leftArrow from './icons/left_arrow.png'
import rightArrow from './icons/right_arrow.png'

const Modal = ({display}) => {
    return (
        <div className="modal">

            <div className="modal__wrapper">
                <button className="modal__close"></button>

                <h3 className="modal__subtitle dinpro">преимущества</h3>
                <h2 className="modal__title gilroy">brend<span className='gilroyBold'>xy</span></h2>

                <div className="modal__content">
                    <div className="modal__item">
                        <div className="modal__counter gilroyBold">01</div>
                        <p className="modal__text dinpro">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit
                        </p>
                    </div>

                    <div className="modal__item">
                        <div className="modal__counter gilroyBold">02</div>
                        <p className="modal__text dinpro">
                            Faucibus pulvinar elementum integer enim
                        </p>
                    </div>

                    <div className="modal__item">
                        <div className="modal__counter gilroyBold">03</div>
                        <p className="modal__text dinpro">
                            Faucibus pulvinar elementum integer enim
                        </p>
                    </div>

{/*                     <div className="modal__item">
                        <div className="modal__counter gilroyBold">04</div>
                        <p className="modal__text dinpro">
                            Mi bibendum neque egestas congue quisque  egestas diam  
                        </p>
                    </div>

                    <div className="modal__item">
                        <div className="modal__counter gilroyBold">05</div>
                        <p className="modal__text dinpro">
                            Venenatis lectus magna fringilla urna 
                        </p>
                    </div>

                    <div className="modal__item">
                        <div className="modal__counter gilroyBold">06</div>
                        <p className="modal__text dinpro">
                            Venenatis lectus magna fringilla urna 
                        </p>
                    </div> */}

                </div>

                <div className="modal__navigation">
                    <button className="modal__navigation_arrow"><img src={leftArrow} alt="left" /></button>

                    <div className="modal__navigation_dots">
                        <div className="modal__navigation_dot modal__navigation_dot-active"></div>
                        <div className="modal__navigation_dot"></div>
                    </div>

                    <button className="modal__navigation_arrow"><img src={rightArrow} alt="right" /></button>
                </div>

            </div>

        </div>   
    )
}

export default Modal;