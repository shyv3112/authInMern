import { useState } from "react";
import styles from "./styles.module.css";
import Table from "../Table/Table";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

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