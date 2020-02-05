// functions that return objects
// each objects is in the correct format that action is expected to be

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
  });