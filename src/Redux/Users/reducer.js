const initState = {
  fetching: false,
  error: false,
  user: false
}

const usersReducer = (
  state = initState,
  action
) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        ...state, fetching: true
      }
    case 'EXAMPLE_ACTION_SUCCESS':
      return {
        ...state,
        fetching: false,
        user: action.user
      }
    case 'EXAMPLE_ACTION_FAILURE':
      return {
        ...state, fetching: false, error: action.e, user: false
      }

    default:
      return state
  }
}

export default usersReducer
