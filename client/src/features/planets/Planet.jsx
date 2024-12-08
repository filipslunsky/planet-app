import { useState } from 'react';
import './planet.css';

const Planet = ({data}) => {
    const [content, setContent] = useState('overview');
    const [img, setImg] = useState('planet');
    const PLANETS_URL = `${import.meta.env.VITE_API_URL}`;

    const setOption = (optionNumber) => {
        switch (optionNumber) {
            case 1:
                setContent('overview');
                setImg('planet');
                break;
            case 2:
                setContent('structure');
                setImg('internal');
                break;
            case 3:
                setContent('geology');
                setImg('geology');
                break;
            default:
                break;
        }
    };
    
    return (
        <>
            <img src={`${PLANETS_URL}${data.images[img].substring(1)}`} alt={`${data.name} image`} />
            <h1>{data.name.toUpperCase()}</h1>
            <p>{data[content].content}</p>
            <p>Source: <a href={data[content].source} target='_blank'>Wikipedia &#x2197;</a></p>
            <h3 onClick={() => {setOption(1)}}>O1 OVERVIEW</h3>
            <h3 onClick={() => {setOption(2)}}>O2 INTERNAL STRUCTURE</h3>
            <h3 onClick={() => {setOption(3)}}>O3 SURFACE GEOLOGY</h3>
            <div className='additionalDataContainer'>
                <div className="rotation">
                    <h4>ROTATION TIME</h4>
                    <p>{data.rotation}</p>
                </div>
                <div className="revolution">
                    <h4>REVOLUTION TIME</h4>
                    <p>{data.revolution}</p>
                </div>
                <div className="radius">
                    <h4>RADIUS</h4>
                    <p>{data.radius}</p>
                </div>
                <div className="temperature">
                    <h4>AVERAGE TEMP</h4>
                    <p>{data.temperature.toUpperCase()}</p>
                </div>
            </div>
        </>
    );
}
 
export default Planet;