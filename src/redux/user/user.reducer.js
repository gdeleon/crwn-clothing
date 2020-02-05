// contains user-related state
// reducer takes 2 props, (initial or last) state object and an action (w/ type and payload)

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;