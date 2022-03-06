
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementIndex, resetTime, setResult, setEndGame } from '../../store/actions';
import Timer from "../Timer";
import styles from './QuizManager.module.scss';

const QuizManager = () =>
{
    const dispatch = useDispatch();
    const currentIndex = useSelector(state => state.currentIndex);
    const currentQuestion = useSelector(state => state.questions[state.currentIndex]);
    const [answer, setAnswer] = useState(null);

    const endGame = useSelector(state => state.endGame);
    const [points, setPoints] = useState(null);

    const solutions = useSelector((state) => state.solutions);
    const result = useSelector((state) => state.result);


    const checkPoints = () =>
    (
        solutions.filter((value, index) => value == result[index])
    );

    useEffect(() => 
    {
        if(endGame)
        {
            setPoints(() => checkPoints().length);
        }
    }, [endGame]);

    // Events
    const handleChange = (e) =>
    {
        setAnswer(e.target.value);
    }
    
    const handleNextClick = () =>
    {
        if(answer)
        {
            dispatch(setResult(answer));
            if(currentIndex < 7)
            {
                dispatch(incrementIndex);
                dispatch(resetTime);
            }
            else if(currentIndex == 7)
            {
                dispatch(setEndGame(true));
            }
        }
    }


    return (
        <div className={styles.wrapper}>
            <section className={styles.game}>
                {
                    points != null ?
                        <>
                            <h1>Quiz Terminato</h1>
                            <p>Hai totalizzato {points} punti!</p>
                        </>
                    :
                        <>
                            <h1>Quiz</h1>
                            <Timer answer={answer} />
                            <div>
                                <h2>{currentQuestion.question}</h2>
                                <div onChange={handleChange}>
                                {
                                    currentQuestion.answers.map((value, index) => (
                                        <label key={index} htmlFor={`answer${index}`}>
                                            {value}
                                            <input id={`answer${index}`} name="answers" value={index} type="radio" />
                                        </label>
                                    ))
                                }
                                </div>
                                <button onClick={handleNextClick}>Avanti</button>
                            </div>
                        </>
                }
            </section>
        </div>
    );
}

export default QuizManager;