
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setResult, resetTime, decrementTime, incrementIndex, setEndGame } from "../../store/actions";
import styles from './Timer.module.scss';

const Timer = ({ answer }) =>
{
    const dispatch = useDispatch();
    const time = useSelector(state => state.currentTime);
    const currentIndex = useSelector(state => state.currentIndex);

    const tick = () =>
    {
        if(time > 0)
        {
            dispatch(decrementTime);
        }
        else
        {
            if(currentIndex < 7)
            {
                dispatch(setResult(answer));
                dispatch(incrementIndex);
                dispatch(resetTime);
            }
            else if(currentIndex === 7)
            {
                dispatch(setResult(answer));
                dispatch(setEndGame(true));
            }
        }
    }

    useEffect(() => 
    {
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    });


    return (
        <div className={styles.wrapper}>
            {time}
        </div>
    );
}

export default Timer;