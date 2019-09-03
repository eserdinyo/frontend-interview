import * as constants from './constants';

export default {
    addQuestion({ commit }, question) {
        commit(constants.ADD_QUESTION, question)
    }
}