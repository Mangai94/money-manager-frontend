import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddIncome from "./addIncome";
import AddExpense from "./addExpense";
import { Tab, Tabs } from "react-bootstrap";

export default function NewTransaction({ refreshTransactions }) {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		refreshTransactions();
		setShow(false);
	};

	const handleShow = () => setShow(true);

	return (
		<React.Fragment>
			<Button variant="primary" type="button" onClick={handleShow}>
				Add New Entry
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Transaction</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Tabs defaultActiveKey="income" id="uncontrolled-tab-example">
						<Tab eventKey="income" title="Income">
							<AddIncome closeModal={handleClose} />
						</Tab>
						<Tab eventKey="expense" title="Expense">
							<AddExpense closeModal={handleClose} />
						</Tab>
					</Tabs>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
}
