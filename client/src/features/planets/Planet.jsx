import './planet.css';

const Planet = ({data}) => {
    console.log(data);

    return (
        <>
            <h2>{data.name}</h2>
        </>
    );
}
 
export default Planet;