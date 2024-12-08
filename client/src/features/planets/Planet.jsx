import { useState } from 'react';
import './planet.css';

const Planet = ({data}) => {
    const [content, setContent] = useState('overview');
    const [img, setImg] = useState('planet');
    const [selected, setSelected] = useState(1);
    const PLANETS_URL = `${import.meta.env.VITE_API_URL}`;

    const setOption = (optionNumber) => {
        switch (optionNumber) {
            case 1:
                setContent('overview');
                setImg('planet');
                setSelected(1);
                break;
            case 2:
                setContent('structure');
                setImg('internal');
                setSelected(2);
                break;
            case 3:
                setContent('geology');
                setImg('geology');
                setSelected(3);
                break;
            default:
                break;
        }
    };
    
    return (
        <>
        <div className="controlsContainerMobile">
                        <h3 className={`controlItem ${selected === 1 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(1)}}>OVERVIEW</h3>
                        <h3 className={`controlItem ${selected === 2 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(2)}}>STRUCTURE</h3>
                        <h3 className={`controlItem ${selected === 3 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(3)}}>SURFACE</h3>
                    </div> 
            <div className="dynamicDataContainer">
                <img className='planetImage' src={`${PLANETS_URL}${data.images[img].substring(1)}`} alt={`${data.name} image`} />
                <div className="descriptionAndControlsContainer">
                    <div className="descriptionContainer">
                        <h1 className='planetName'>{data.name.toUpperCase()}</h1>
                        <p className='planetDescription'>{data[content].content}</p>
                        <p className='wikiSource'>Source: <a className='wikiSourceLink' href={data[content].source} target='_blank'>Wikipedia &#x2197;</a></p>
                    </div>
                    <div className="controlsContainer">
                        <h3 className={`controlItem ${selected === 1 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(1)}}>O1 OVERVIEW</h3>
                        <h3 className={`controlItem ${selected === 2 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(2)}}>O2 INTERNAL STRUCTURE</h3>
                        <h3 className={`controlItem ${selected === 3 ? `selectedControlItem${data.name}` : ''}`} onClick={() => {setOption(3)}}>O3 SURFACE GEOLOGY</h3>
                    </div>
                </div>
            </div>
            <div className='additionalDataContainer'>
                <div className="additionalDataItem">
                    <h4 className="additionalDataItemTitle">ROTATION TIME</h4>
                    <p className="additionalDataItemInfo">{data.rotation.toUpperCase()}</p>
                </div>
                <div className="additionalDataItem">
                    <h4 className="additionalDataItemTitle">REVOLUTION TIME</h4>
                    <p className="additionalDataItemInfo">{data.revolution.toUpperCase()}</p>
                </div>
                <div className="additionalDataItem">
                    <h4 className="additionalDataItemTitle">RADIUS</h4>
                    <p className="additionalDataItemInfo">{data.radius.toUpperCase()}</p>
                </div>
                <div className="additionalDataItem">
                    <h4 className="additionalDataItemTitle">AVERAGE TEMP</h4>
                    <p className="additionalDataItemInfo">{data.temperature.toUpperCase()}</p>
                </div>
            </div>
        </>
    );
}
 
export default Planet;