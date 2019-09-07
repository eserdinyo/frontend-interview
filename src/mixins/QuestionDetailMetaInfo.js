export default {
	metaInfo() {
		if (this.isLoading)
			return {};
		return {
			title: `${this.question.title}`,
			meta: [
				{
					name: "description",
					content: `${this.question.tech} interview questions. Get ready for ${this.question.tech} interview.` // eslint-disable-line
				},
				{
					name: "keywords",
					content: `frontend, interview, question, ${this.question.tech}`
				}
			]
		}
	},
}