import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Planet from "./Planet";
import Loading from "./statusComponents/Loading";
import Error from "./statusComponents/Error";
import { getPlanets } from "./state/slice";

const Mercury = () => {
    const dispatch = useDispatch();
    const planets = useSelector(state => state.planets.planets);
    const status = useSelector(state => state.planets.status);

    useEffect(() => {
        dispatch(getPlanets());
    }, [dispatch]);

    const planet = 'Mercury';

    const data = planets.filter(item => item.name === planet)[0];

    if (status === 'idle' || status === 'loading') {
        return (
            <Loading planet={planet} />
        )
    };

    if (status === 'failed') {
        return (
            <Error planet={planet} />
        )
    };

    return (
        <>
            <Planet data={data} />
        </>
    );
}
 
export default Mercury;