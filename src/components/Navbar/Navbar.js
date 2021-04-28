import React from 'react'
import classes from './Navbar.module.css'
import DropdownIcon from '../../assets/arrow_drop_down-24px.svg'

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<div className={classes.LogoContainer}>
				<h2 className={classes.Logo}>Rialto</h2>
				<ul className={classes.NavLinks}>
					<li className={classes.NavLink}>Dashboard</li>
					<li className={`${classes.NavLink} ${classes.Active}`}>My Loans</li>
					<li className={classes.NavLink}>My Tasks</li>
				</ul>
			</div>

			<div className={classes.SignOutContainer}>
				<p className={classes.Welcome}>
					Welcome to Andrea Palmer{' '}
					<span>
						<img src={DropdownIcon} alt='dropdown' />
					</span>
				</p>
				<button className={classes.SignoutBtn}>Sign Out</button>
			</div>
		</nav>
	)
}

export default Navbar
