export default {
	state: {
		value: "init value 1",
	},
	mutators: {
		setValue: (state, value) => ({ value }),
	},
}