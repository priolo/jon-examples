import { themeLight } from "../theme"
import {Dashboard, Person} from '@material-ui/icons';


export default {
	state: {
		busy: false,
		title: "...",
		theme: themeLight,
		drawerIsOpen: true,
		menu: [
			{label: "Dashboard", icon: Dashboard, route: "/dashboard" },
			{label: "Users", icon: Person, route: "/user" },
		]
	},
	getters: {
		getFormatMessage: (state) => state.message.toUpperCase(),
	},
	actions: {
	},
	mutators: {
		setBusy: (state,busy) => ({ busy }),
		setTitle: (state,title) => ({title }),
		setDrawerIsOpen: (state,drawerIsOpen) => ({drawerIsOpen }),
		toggleDrawerIsOpen: (state) => ({drawerIsOpen:!state.drawerIsOpen}),
	},
}

