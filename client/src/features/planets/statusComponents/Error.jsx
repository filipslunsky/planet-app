import './status.css';

const Error = ({planet}) => {
    return (
        <>
            <p className="errorMessage">Oooops... Error retrieving the {planet} data, please reload the site or try again later.</p>
        </>
    );
}
 
export default Error;