import { useState } from "react";
import styles from "./styles.module.css";
import DataTable from 'react-data-table-component';
import Table from "../Table/Table";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const columns = [
		{
			name: "Name",
			selector: row => row.name,
			sortable: true
		},
		{
			name: "Email",
			selector: row => row.email,
			sortable: true
		},
		{
			name: "Age",
			selector: row => row.age,
			sortable: true
		}
	];

	const data = [
		{
			id: 1,
			name: 'John',
			email: 'johnab123@gmail.com',
			age: 23
		},
		{
			id: 2,
			name: 'Benny',
			email: 'benny123@gmail.com',
			age: 24
		},
		{
			id: 3,
			name: 'Cathy',
			email: 'cathy123@gmail.com',
			age: 23
		},
		{
			id: 4,
			name: 'Harry',
			email: 'harry123@gmail.com',
			age: 21
		},
		{
			id: 5,
			name: 'Rose',
			email: 'rose123@gmail.com',
			age: 17
		}
	]

	const [records, setRecords] = useState(data);

	function handleFilter(event) {
		const newData = data.filter(row => {
			return row.name.toLowerCase().includes(event.target.value.toLowerCase())
		})
		setRecords(newData)
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>UserData</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div> <Table/> </div>
		</div>
	);
};

export default Main;