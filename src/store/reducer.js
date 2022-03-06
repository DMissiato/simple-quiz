
const timeForQuestion = 30;

const initState =
{
    questions: [
        {
            question: '1) Quale di questi non è un metodo HTTP:',
            answers: [
                'GET',
                'POST',
                'MAKE',
                'PATCH',
            ]
        },
        {
            question: '2) Quale di questi non è uno stato possibile di una Promise:',
            answers: [
                'pending',
                'accepted',
                'fullfilled',
                'rejected',
            ]
        },
        {
            question: 'Domanda 3',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        },
        {
            question: 'Domanda 4',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        },
        {
            question: 'Domanda 5',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        },
        {
            question: 'Domanda 6',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        },
        {
            question: 'Domanda 7',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        },
        {
            question: 'Domanda 8',
            answers: [
                'risposta 1',
                'risposta 2',
                'risposta 3',
                'risposta 4',
            ]
        }
    ],
    solutions: [ 2, 1, 0, 0, 0, 0, 0, 0 ],
    result: [],
    currentIndex: 0,
    currentTime: timeForQuestion,
    endGame: false,
}

const reducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case 'setResult':
            return { ...state, result: [ ...state.result, action.payload ] };
        case 'incrementIndex':
            return { ...state, currentIndex: (state.currentIndex + 1) };
        case 'resetTime':
            return { ...state, currentTime: timeForQuestion };
        case 'decrementTime':
            return { ...state, currentTime: (state.currentTime - 1) };
        case 'setEndGame':
            return { ...state, endGame: action.payload };
        default:
            return state;
    }
}

export { reducer };