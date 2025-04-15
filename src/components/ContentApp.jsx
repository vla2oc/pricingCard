import AppCard from "./Context/AppCard";
import { useState } from 'react'
import "../components/ContentApp.css"


const posts = [
    { id: 1, subtitle: 'OVERDRIVE', price: '$80', priceYear: '$800', description: 'Most popular plan', content1: 'All Starter features', content2: '1Tb additional storage', content3: 'Unlimited projects', content4: 'Analytics' },
    { id: 2, subtitle: 'TEAM', price: '$39', priceYear: '$400', description: 'Exlusive for teams', content1: 'All overdrive features', content2: '10Tb additional storage', content3: '50% off per member', content4: 'Real-time collaboration' },
    { id: 3, subtitle: 'CORE', price: '$19', priceYear: '$200', description: 'Most popular plan', content1: '100MB Cloud Storage', content2: '100+ prompt templates', content3: '5 projects', content4: '24/7 support' },
]


export default function ContentApp() {

    const [isYearly, setYearle] = useState(false)

    const toggleSwitch = () => {
        setYearle(!isYearly)
    }

    return (
        <div className="content">
            <h1 className="main-text">Choose your plan</h1>
            <div className="switch-container">
                <label className="switch" >
                    <input type="checkbox" onChange={toggleSwitch} />
                    <span className="slider"></span>
                    <p>{isYearly ? 'Year' : 'Month'}</p>
                </label>
            </div>
            <div className="card-content">
                {posts.map((post) => (
                    <AppCard key={post.id} post={post} isYearly={isYearly} />
                ))}
            </div>
        </div>
    )
}