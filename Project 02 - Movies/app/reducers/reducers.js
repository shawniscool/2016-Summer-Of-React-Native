import { combineReducers } from 'redux'
import { REQUEST_MOVIES, RECEIVE_MOVIES, FETCHING_NEXT_PAGE_MOVIES } from '../actions/actions'

function movieReducer(state = {
	isFetching: false,
	isLoadingMore: false,
	movies: [],
	page: 1
}, action) {
	switch (action.type) {
		case REQUEST_MOVIES:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_MOVIES:
			return Object.assign({}, state, {
				isFetching: false,
				movies: action.movies,
				page: action.page+1,
				isLoadingMore: false
			})
		case FETCHING_NEXT_PAGE_MOVIES:
			return Object.assign({}, state, {
				isLoadingMore: true
			})
		default:
			return state
	}
}

const movieApp = combineReducers({
	movieData: movieReducer
})

export default movieApp