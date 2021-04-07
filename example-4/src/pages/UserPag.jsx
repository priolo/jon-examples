import React, {useEffect} from "react"
import {useStore} from "@priolo/jon"
import {CircularProgress, List, ListItem, ListItemText} from "@material-ui/core"

export default function UsersPage() {
	const {state: layout, setTitle} = useStore("layout")
	const {state: user, fetchAll} = useStore("user")

	useEffect(() => {
		setTitle("Users")
		// fetch data
		fetchAll()
	}, [])

	return layout.busy ? (
		<CircularProgress />
	) : (
		<List component="nav" aria-label="main mailbox folders">
			{user.all.map((u) => (
				<ListItem>
					<ListItemText primary={u.name} />
				</ListItem>
			))}
		</List>
	)
}
