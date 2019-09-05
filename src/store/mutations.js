import * as constants from './constants';

export default {
    [constants.FETCH_QUESTIONS](state, questions) {
        state.questions = questions;
    },
    [constants.FETCH_ALL_QUESTIONS](state, questions) {
        state.allQuestions = questions;
    },
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setCurrentUser(state, payload) {
        state.currentUser = payload;
    }
}