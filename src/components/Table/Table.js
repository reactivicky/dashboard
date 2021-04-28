import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import classess from './Table.module.css'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#E8F1FF',
		color: '#414141',
		fontFamily: 'AvenirHeavy',
		padding: '10px 16px',
		border: 'none',
	},
	body: {
		fontSize: 14,
		fontFamily: 'Avenir',
		color: ' #666666',
		border: 'none',
	},
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(even)': {
			backgroundColor: '#F7F7F7',
		},
		'&:nth-of-type(odd)': {
			backgroundColor: '#FFFFFF',
		},
	},
}))(TableRow)

const useStyles = makeStyles({
	table: {
		minWidth: 700,
		marginBottom: '14px',
	},
})

export default function CustomizedTables() {
	const classes = useStyles()
	const [rows, setRows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('fakedata.json')
			setRows(res.data.loanDetails)
		}
		fetchData()
	}, [])

	return (
		<TableContainer>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>Loan Number</StyledTableCell>
						<StyledTableCell>Borrower Name</StyledTableCell>
						<StyledTableCell>Loan Amount</StyledTableCell>
						<StyledTableCell>Note Rate</StyledTableCell>
						<StyledTableCell>Last Milestone</StyledTableCell>
						<StyledTableCell>Next Milestone</StyledTableCell>
						<StyledTableCell>Loan Type</StyledTableCell>
						<StyledTableCell>Loan Purpose</StyledTableCell>
						<StyledTableCell align='center'>Alerts</StyledTableCell>
						<StyledTableCell align='center'>Messages</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.loanNumber}>
							<StyledTableCell component='th' scope='row'>
								{row.loanNumber}
							</StyledTableCell>
							<StyledTableCell>{row.borrowerName}</StyledTableCell>
							<StyledTableCell>{row.loanAmount}</StyledTableCell>
							<StyledTableCell>{row.noteRate}</StyledTableCell>
							<StyledTableCell>{row.lastMilestone}</StyledTableCell>
							<StyledTableCell>{row.nextMilestone}</StyledTableCell>
							<StyledTableCell>{row.loanType}</StyledTableCell>
							<StyledTableCell>{row.loanPurpose}</StyledTableCell>
							<StyledTableCell align='center'>
								<div className={row.alerts !== '-' ? classess.Alert : null}>
									{row.alerts}
								</div>
							</StyledTableCell>
							<StyledTableCell align='center'>{row.messages}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
