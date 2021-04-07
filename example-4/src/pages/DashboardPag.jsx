import React, { useEffect } from 'react'
import { useStore } from "@priolo/jon";


export default function DashboardPage () {

	const { setTitle } = useStore("layout")

	useEffect(() => {
		setTitle("Dashboard")
		// fetch data with ajax
	},[])
	
	return (
		<div>Dashboard</div>
	)
}