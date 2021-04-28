import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Table from './components/Table/Table'
import Pagination from './components/Pagination/Pagination'

function App() {
	return (
		<div>
			<Navbar />
			<div className='container'>
				<SearchFilter />
				<Table />
				<Pagination />
			</div>
		</div>
	)
}

export default App
