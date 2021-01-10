import React, { Component } from "react";
import transactionsApi from "../services/transactionsApi";

class AddExpense extends Component {
	state = {
		amount: "",
		division: "Personal",
		category: "Food",
		description: "",
		date: "",
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { amount, division, category, description, date } = this.state;
		if (await transactionsApi.addNewTransaction("Expense", amount, division, category, description, date)) {
			alert("Expense data added successfully");
			this.setState({ amount: "", division: "Personal", category: "Food", description: "", date: "" });
			this.props.closeModal();
			return;
		}

		alert("There is an unexpected error occured. Please try again");
	};

	render() {
		const { amount, division, category, description, date } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="amount">Amount</label>
						<input
							id="amount"
							value={amount}
							className="form-control"
							placeholder="0.0"
							onChange={e => this.setState({ amount: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="division">Division</label>
						<select
							id="division"
							value={division}
							className="form-control"
							onChange={e => this.setState({ division: e.target.value })}
						>
							<option>Personal</option>
							<option>Professional</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select
							id="category"
							value={category}
							className="form-control"
							onChange={e => this.setState({ category: e.target.value })}
						>
							<option>Fuel</option>
							<option>Food</option>
							<option>Medicine</option>
							<option>Loan</option>
							<option>Entertainment</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							value={description}
							onChange={e => this.setState({ description: e.target.value })}
							className="form-control"
							rows="3"
						></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="date">Date</label>
						<input type="date" value={date} onChange={e => this.setState({ date: e.target.value })} className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default AddExpense;
