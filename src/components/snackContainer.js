import { buySnack } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const SnackContainer = () => {

    const numOfSnacks = useSelector(state => state.snack.numOfSnacks)
    const dispatch = useDispatch();
    return ( 
        <div>
            <h2>Number of Snacks - {numOfSnacks}</h2>
            <button onClick={() => dispatch(buySnack())}>Buy Snack</button>
        </div>
     );
}
 
export default SnackContainer;