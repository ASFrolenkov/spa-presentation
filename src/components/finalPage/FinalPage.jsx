import './finalPage.scss'

import PinkButton from '../PinkButton/PinkButton'
import Bubbles from './bubbles/Bubble'
import Modal from './modal/Modal'

import bottle from './imgs/bottle.png'
import firsticon from './imgs/first_icon.png'
import secondIcon from './imgs/second_icon.png'

const FinalPage = () => {
    return (
        <section className="section final">
            <div className="final__wrapper">
                <img src={bottle} alt="bottle" className="final__bottle" />
                <Bubbles/>
            </div>

            <div className="final__subwrapper">
                <h3 className="final__subtitle dinpro">Ключевое сообщение</h3>
                <h2 className="final__title gilroy">brend<span className='gilroyBold'>xy</span></h2>

                <div className="final__block">
                    <div className="final__first">
                        <img src={firsticon} alt="first-icon" className="final__block_icon" />
                        <p className="final__first_descr dinpro">
                            Ehicula ipsum a arcu 
                            cursus vitae. Eu non 
                            diam phasellus 
                            vestibulum lorem sed 
                            risus ultricies
                        </p>
                    </div>

                    <div className="final__second">
                        <div className="final__second_wrapper">
                            <img src={secondIcon} alt="second-icon" className="final__block_icon" />
                            <p className="final__second_descr dinpro">
                                A arcu 
                                cursus vitae
                            </p>
                        </div>

                        <PinkButton className={'finalPageBtn'}>Подробнее</PinkButton>
                    </div>
                </div>  
            </div>

            <Modal/>

        </section>
    )
}

export default FinalPage