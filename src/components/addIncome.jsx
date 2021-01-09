import React, { Component } from "react";

class AddIncome extends Component {
	state = {
		amount: 0,
		category: "Allowance",
		description: "",
		date: "",
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
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
							onChange={e => this.setState({ amount: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select id="category" className="form-control" onChange={e => this.setState({ category: e.target.value })}>
							<option value="Allowance">Allowance</option>
							<option value="Salary">Salary</option>
							<option value="Bonus">Bonus</option>
							<option value="Increment">Increment</option>
							<option value="Pettycash">Petty cash</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							onChange={e => this.setState({ description: e.target.value })}
							className="form-control"
							rows="3"
						></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="date">Date</label>
						<input type="date" className="form-control" onChange={e => this.setState({ date: e.target.value })} />
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
