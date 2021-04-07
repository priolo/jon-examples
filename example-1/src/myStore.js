export default {
	state: {
		value: "init value",
	},
	getters: {
		getUppercase: (state) => state.value.toUpperCase(),
	},
	actions: {
		fetch: async (state, payload, store) => {
			//const {response} = await ajax.get(`my_server`)
			//store.setValue(response)
		}
	},
	mutators: {
		setValue: (state, value) => ({ value }),
	},
}