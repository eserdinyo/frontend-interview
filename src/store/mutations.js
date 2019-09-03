import * as constants from './constants';

export default {
    [constants.ADD_QUESTION](state, question) {
        state.questions.push(question);
    }
}