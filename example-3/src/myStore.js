import axios from "axios";


export default {
	state: {
		book: null,
		apiURL: "https://www.anapioficeandfire.com/api/books?pageSize=30",
	},
	getters: {
	},
	actions: {
		fetchBook: async (state, payload, store) => {
			const {data} = await axios.get(state.apiURL);
			store.setBook(data[0])
		},
	},
	mutators: {
		setBook: (state, book) => ({ book }),
	},
}