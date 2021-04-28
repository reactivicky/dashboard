import React from 'react'
import classes from './SearchFilter.module.css'

const SearchFilter = () => {
	return (
		<div className={classes.SearchFilter}>
			<div className={classes.SearchInputContainer}>
				<input
					className={classes.SearchInput}
					type='text'
					placeholder='Search my loans'
				/>
				<button className={classes.SearchBtn}>Search</button>
			</div>

			<div className={classes.FilterInputContainer}>
				<label htmlFor='filterInput'>Filter loan by statuses</label>
				<select id='filterInput'>
					<option value='first'>First</option>
				</select>
				<button className={classes.SearchBtn}>Reset Filter</button>
			</div>
		</div>
	)
}

export default SearchFilter
