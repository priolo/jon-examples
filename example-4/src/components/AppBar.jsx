import React from "react"
import { useStore } from "@priolo/jon";
import {makeStyles} from "@material-ui/core/styles"
import {Menu as MenuIcon} from "@material-ui/icons"
import {AppBar, Toolbar, Typography, IconButton} from "@material-ui/core"


export default function () {

	const classes = useStyles()
	const {state: layout, toggleDrawerIsOpen} = useStore("layout")
	const cnAppBar = `${classes.appBar} ${layout.drawerIsOpen ? classes.appBarShift : ""}`
	const cnIconButton = `${classes.menuButton} ${layout.drawerIsOpen ? classes.hide : ""}`

	return (
		<AppBar position="fixed" className={cnAppBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={toggleDrawerIsOpen}
					edge="start"
					className={cnIconButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					{layout.title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}


const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: theme.app.drawer.width,
		width: `calc(100% - ${theme.app.drawer.width}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: "none"
	}
}))
