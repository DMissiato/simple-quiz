
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementIndex, resetTime, setResult, setEndGame } from '../../store/actions';
import Timer from "../Timer";
import styles from './QuizManager.module.scss';


const checkPoints = (solutions, result) =>
(
    solutions.filter((value, index) => parseInt(value) === parseInt(result[index]))
);


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



    useEffect(() => 
    {
        if(endGame)
        {
            setPoints(() => checkPoints(solutions, result).length);
        }
    }, [endGame, solutions, result]);

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
            else if(currentIndex === 7)
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
                                            <input id={`answer${index}`} name="answers" value={index} type="radio" defaultChecked={!index} />
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