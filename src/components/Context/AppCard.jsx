import '../Context/AppCard.css'
import { MdAutoFixHigh } from "react-icons/md";
import { useState } from 'react'
import gif from '../../assets/gifanim.gif'
import staticinsom from '../../assets/staticinsom.png'
export default function AppCard({ post, isYearly }) {
    const { subtitle, price, priceYear, description, content1, content2, content3, content4 } = post
    const [size, setSize] = useState(false)
    const [color, setColor] = useState('rgb(10, 14, 41)')
    const priceToShow = isYearly ? priceYear : price
    const [animation, setAnimation] = useState(false)

    function handleMouseEnter() {
        setSize(true)
        setColor('#1c2a67f6')
        setAnimation(true)

    }



    function handleMouseLeave() {
        setSize(false)
        setColor('rgb(10, 14, 41)')
        setAnimation(false)
    }


    return (
        <div className='card-container'
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            style={{
                transform: size ? 'translateY(-30px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                position: 'relative',
                backgroundColor: color,
            }}
        >

            <img src={animation ? gif : staticinsom} alt="car" style={{ width: '100px', borderRadius: '50%', objectFit: 'cover', position: "absolute", top: '-40px', border: "1px solid rgba(0, 0, 0, 0.209)" }} />

            <div className='card-top'>
                <div className='subtitle'>
                    <nav>
                        <h3 className='subtitle-name'>{subtitle}</h3>
                        <h1 className='title-price'>{priceToShow}</h1>
                        <span className='decription'>{description}</span>
                    </nav>
                </div>
            </div>
            <div className='line-horizont'></div>
            <div className='card-bottom'>
                <div className='card-content'>
                    <nav>
                        <li><MdAutoFixHigh style={{ marginRight: '15px' }} />{content1}</li>
                        <li><MdAutoFixHigh style={{ marginRight: '15px' }} />{content2}</li>
                        <li><MdAutoFixHigh style={{ marginRight: '15px' }} />{content3}</li>
                        <li><MdAutoFixHigh style={{ marginRight: '15px' }} />{content4}</li>
                    </nav>
                </div>
                <div className='button'>
                    <button>Get Started</button>
                </div>
            </div>
        </div >
    )
}