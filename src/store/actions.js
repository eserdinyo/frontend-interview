import * as constants from './constants';
import { questionsREF } from "@/firebase";
import firebase from 'firebase';

export default {
  addQuestion(_, question) {
    return questionsREF
      .add({
        title: question.title,
        tech: question.tech,
        difficulty: question.difficulty,
        detail: question.detail,
        slug: question.slug,
      }).then(res => res.data)
  },
  fetchQuestions({ commit }, param) {
    return questionsREF.where("tech", "==", param).get().then(snapshot => {
      const questions = snapshot.docs.map(res => {
        const data = res.data();
        data.id = res.id;
        return data;
      });

      commit(constants.FETCH_QUESTIONS, questions)
      return questions;
    })
  },
  fetchSingleQuestion(_, param) {
    return questionsREF.where("slug", '==', param).get().then(snapshot => {
      const questions = snapshot.docs.map(res => {
        const data = res.data();
        return data;
      });

      return questions[0];

    })
  }
}