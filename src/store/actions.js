
const setResult = (index) => ({
    type: 'setResult',
    payload: index
});

const incrementIndex = {
    type: 'incrementIndex'
};

const resetTime = {
    type: 'resetTime'
};

const decrementTime = {
    type: 'decrementTime'
};

const setEndGame = (bool) => ({
    type: 'setEndGame',
    payload: bool
});


export { 
    setResult,
    incrementIndex,
    resetTime,
    decrementTime,
    setEndGame
}