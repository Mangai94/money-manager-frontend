import React, { Component } from "react";

class AddExpense extends Component {
	state = {};
	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="amount">Amount</label>
						<input id="amount" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="division">Division</label>
						<select id="division" className="form-control">
							<option>Personal</option>
							<option>Professional</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="category">Category</label>
						<select id="category" className="form-control">
							<option>Fuel</option>
							<option>Food</option>
							<option>Medicine</option>
							<option>Loan</option>
							<option>Entertainment</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea id="description" className="form-control" rows="3"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="date">Date</label>
						<input type="date" className="form-control" />
					</div>
				</form>
			</div>
		);
	}
}

export default AddExpense;
