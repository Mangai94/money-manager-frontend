import React, { Component } from "react";
import transactionsApi from "../services/transactionsApi";

class AddIncome extends Component {
	state = {
		amount: "",
		category: "Salary",
		description: "",
		date: "",
	};
	handleSubmit = async e => {
		e.preventDefault();
		const { amount, category, description, date } = this.state;
		if (await transactionsApi.addNewTransaction("Income", amount, null, category, description, date)) {
			alert("Income data added successfully");
			this.setState({ amount: "", category: "Salary", description: "", date: "" });
			this.props.closeModal();
			return;
		}

		alert("There is an unexpected error occured. Please try again");
	};
	render() {
		const { amount, category, description, date } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="amount">Amount</label>
						<input
							id="amount"
							type="number"
							step="any"
							min="0"
							className="form-control"
							placeholder="0.0"
							value={amount}
							onChange={e => this.setState({ amount: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select
							id="category"
							className="form-control"
							value={category}
							onChange={e => this.setState({ category: e.target.value })}
						>
							<option value="Salary">Salary</option>
							<option value="Allowance">Allowance</option>
							<option value="Bonus">Bonus</option>
							<option value="Increment">Increment</option>
							<option value="Pettycash">Petty cash</option>
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
						<input type="date" value={date} className="form-control" onChange={e => this.setState({ date: e.target.value })} />
					</div>
					<button type="submit" className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default AddIncome;
