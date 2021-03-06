import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT', 
    incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const reSetCount = () => ({
    type: 'RESET'
});


// Reducers
// 1. Reducers are pure functions
// 2. Never change state and action - immutable

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;
    }
};

// The Store
const store = createStore(countReducer);

// Fired every time store changes
store.subscribe(() => {
    console.log(store.getState());
});

// Actions - objects that get sent to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(reSetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 101 }));

