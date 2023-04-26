import './bgCell.scss'

import rod from '../../../assets/cell-rod.png'
import smooth from '../../../assets/cell-smooth-round.png'
import spiny from '../../../assets/cell-spiny-round.png'
import pink from '../../../assets/pink.png'
import uneven from '../../../assets/cell-uneven-round.png'

const BgCells = () => {
    return (
        <div className="bgCell">
            <img src={rod} alt="rod" className="bgCell__rod cell" />
            <img src={pink} alt="pink" className="bgCell__pink cell" />
            <img src={pink} alt="pink_greased" className="bgCell__pink_greased cell" />
            <img src={smooth} alt="smooth_top" className="bgCell__smooth_top cell" />
            <img src={smooth} alt="smooth_bottom" className="bgCell__smooth_bottom cell" />
            <img src={smooth} alt="smooth_greased-top" className="bgCell__smooth_greased-top cell" />
            <img src={smooth} alt="smooth_greased-bottom" className="bgCell__smooth_greased-bottom cell" />
            <img src={spiny} alt="spiny" className="bgCell__spiny cell" />
            <img src={uneven} alt="uneven" className="bgCell__uneven cell" />
        </div>
    )
}

export default BgCells;