import * as constants from './constants';
import { questionsREF, usersREF } from "@/firebase";

export default {
  addQuestion(_, question) {
    return questionsREF
      .add({
        title: question.title,
        tech: question.tech,
        difficulty: question.difficulty,
        detail: question.detail,
        slug: question.slug,
        username: question.username,
        status: false,
      }).then(res => res.data)
  },
  addUser(_, payload) {
    let users = []

    usersREF.where('uid', '==', payload.uid).get().then(snapshot => {
      users = snapshot.docs.map(res => {
        const data = res.data();
        return data;
      })
    }).then(res => {

      if (users.length == 0) {
        return usersREF.add({
          uid: payload.uid,
          email: payload.email,
          name: payload.name
        }).then(res => res.data)
      }
    })
  },
  fetchQuestions({ commit }, param) {
    return questionsREF.where("tech", "==", param).where('status', '==', true).get().then(snapshot => {
      const questions = snapshot.docs.map(res => {
        const data = res.data();
        data.id = res.id;
        return data;
      });

      commit(constants.FETCH_QUESTIONS, questions)
      return questions;
    })
  },
  fetchAllQuestions({ commit }) {
    return questionsREF.get().then(snapshot => {
      const questions = snapshot.docs.map(res => {
        const data = res.data();
        data.id = res.id;
        return data;
      });

      commit(constants.FETCH_ALL_QUESTIONS, questions)
      return questions;
    })
  },
  fetchSingleQuestion(_, param) {
    return questionsREF.where("slug", '==', param).get().then(snapshot => {
      const questions = snapshot.docs.map(res => {
        const data = res.data();
        data.id = res.id;
        return data;
      });

      return questions[0];

    })
  },

  // Change Questions Status True or False
  changeQuestionStatus(_, payload) {

    return questionsREF.doc(payload.id)
      .update({ status: payload.status }).then(() => {
        return true;
      })
  },
  editQuestion(_, payload) {
    return questionsREF.doc(payload.id)
      .update({
        title: payload.title,
        tech: payload.tech,
        difficulty: payload.difficulty,
        detail: payload.detail,
      })
  }
}