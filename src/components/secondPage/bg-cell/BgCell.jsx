import './bgCell.scss'
import pink from '../../../assets/pink.png'

const BgCell = () => {
    return (
        <div className="bg-cell">
            <div className="bg-cell__pink"><img src={pink} alt="pink" /></div>
            <div className="bg-cell__pink"><img src={pink} alt="pink" /></div>
            <div className="bg-cell__pink"><img src={pink} alt="pink" /></div>
            <div className="bg-cell__pink"><img src={pink} alt="pink" /></div>
            <div className="bg-cell__pink"><img src={pink} alt="pink" /></div>
        </div>
    )
}

export default BgCell;