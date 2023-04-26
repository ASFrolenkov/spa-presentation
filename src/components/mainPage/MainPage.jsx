import './mainPage.scss'

import BgCells from './bg-cell/BgCell';
import PinkButton from '../PinkButton/PinkButton';

const MainPage = () => {
    return (
        <section className="section mainPage">
            <h2 className="mainPage__subtitle dinpro">Привет,</h2>
            <div className="mainPage__wrapper">
                <h1 className="mainPage__title gilroy">
                    это <span className='bold gilroyBold'>не</span> <br />
                    коммерческое <br />
                    <span className="index1">задание</span>
                </h1>

                <PinkButton className={'mainPageBtn'}>Что дальше?</PinkButton>
            </div>

            <BgCells/>
        </section>
    )
}

export default MainPage;