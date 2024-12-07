import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "./state/slice";

const Earth = () => {
    const dispatch = useDispatch();
    const planets = useSelector(state => state.planets.planets);

    useEffect(() => {
        dispatch(getPlanets());
    }, [dispatch]);

    useEffect(() => {
        console.log(planets);
    }, [dispatch]);

    return (
        <>
            <h2>Earth</h2>
        </>
    );
}
 
export default Earth;