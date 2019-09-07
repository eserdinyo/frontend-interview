export default {
	metaInfo() {
		if (this.isLoading)
			return {};
		return {
			title: `${this.capitalize(this.tech)} Interview Questions`,
			meta: [
				{
					name: "description",
					content: `${this.tech} interview questions. Get ready for ${this.tech} interview.` // eslint-disable-line
				},
				{
					name: "keywords",
					content: `frontend, interview, question, ${this.tech}`
				}
			]
		}
	},
	methods: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	}
}