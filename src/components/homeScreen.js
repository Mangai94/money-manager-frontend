import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import NewTransaction from "./newTransaction";
import transactionsApi from "../services/transactionsApi";

function HomeScreen() {
	const [dayWisetransactions, setTransactions] = useState([]);

	useEffect(function () {
		loadAllTransactions();
	}, []);

	const loadAllTransactions = async () => {
		const transactions = await transactionsApi.getDaywiseTransactions();
		setTransactions(transactions);
	};

	return (
		<div className="container p-3">
			<h4 className="mb-4">Daywise Transactions</h4>
			<div>
				{dayWisetransactions.map(day => (
					<React.Fragment key={day.date}>
						<table className="table table-hover">
							<tbody>
								<tr className="">
									<th>{day.date}</th>
									<th className="color-green">${day.totalIncome}</th>
									<th className="color-red">${day.totalExpense}</th>
								</tr>
								{day.transactions.map(t => (
									<tr key={t.id}>
										<td>{t.category}</td>
										<td>{t.division}</td>
										<td className={t.type === "Expense" ? "color-red" : "color-green"}>
											${t.amount}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</React.Fragment>
				))}
			</div>

			<NewTransaction refreshTransactions={loadAllTransactions} />
		</div>
	);
}

export default HomeScreen;
