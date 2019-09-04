import * as constants from './constants';

export default {
    [constants.ADD_QUESTION](state, question) {

            console.log(question);
            
        // state.questions.push(question);
    },

    [constants.FETCH_QUESTIONS](state, questions) {
        state.questions = questions;
    },
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    }
}