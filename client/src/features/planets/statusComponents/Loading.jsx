import './status.css';

const Loading = ({planet}) => {
    return (
        <>
            <p className="loadingMessage">Loading {planet} data, please wait...</p>
        </>
    );
}
 
export default Loading;