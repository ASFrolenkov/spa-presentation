import './secondPage.scss'
import { useState } from 'react'
import BgCell from './bg-cell/BgCell'

const SecondPage = () => {
    const [range, setRange] = useState(0)

    return (
        <section className="section second">

            <h2 className="second__title dinpro">текст <br /> сообщения</h2>

            <div className="second__wrapper">
                <input type="range" value={range} max={100} step={0.5} onChange={e => {setRange(e.target.value)}} className='second__range'/>

                <div className="second__block">
                    <p className="second__text dinpro" style={{bottom: `${range}%`}}>
                        <span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi 
                        tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget 
                        felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam 
                        dignissim diam quis enim lobortis. Est sit amet facilisis magna. 
                        Neque laoreet suspendisse interdum consectetur libero id. 
                        Nec ullamcorper sit amet risus nullam eget felis eget. 
                        Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. 
                        Euismod quis viverra nibh cras pulvinar mattis nunc. 
                        Massa massa ultricies mi quis. Sit amet massa vitae tortor 
                        condimentum lacinia. Et malesuada fames ac turpis egestas 
                        integer eget. Elementum pulvinar etiam non quam lacus suspendisse 
                        faucibus interdum posuere. <br /><br />

                        Amet justo donec enim diam vulputate ut pharetra sit. 
                        Risus ultricies tristique nulla aliquet enim tortor at auctor. 
                        Velit sed ullamcorper morbi tincidunt ornare massa. 
                        Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim 
                        diam quis enim. Gravida neque convallis a cras. Ut enim blandit 
                        volutpat maecenas volutpat. Mauris sit amet massa vitae tortor 
                        condimentum lacinia quis vel.
                    </p>
                </div>
            </div>

            <BgCell/>
        </section>
    )
}

export default SecondPage