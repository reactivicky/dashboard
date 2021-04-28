import React from 'react'
import classes from './Pagination.module.css'

const Pagination = () => {
	return (
		<div className={classes.Pagination}>
			<button>{'<<'}</button>
			<button className={classes.Active}>1</button>
			<button>2</button>
			<button>3</button>
			<button>{'>>'}</button>
		</div>
	)
}

export default Pagination
