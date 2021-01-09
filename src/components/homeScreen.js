import React, { Component } from "react";
import AddIncome from "./addIncome";
import AddExpense from "./addExpense";

class HomeScreen extends Component {
	state = {};

	render() {
		return (
			<div>
				<h3>Home</h3>
				<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter">
					Add New Entry
				</button>
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">
									Add New Transaction
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="income-tab"
											data-toggle="tab"
											href="#income"
											role="tab"
											aria-controls="income"
											aria-selected="true"
										>
											Income
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="expense-tab"
											data-toggle="tab"
											href="#expense"
											role="tab"
											aria-controls="expense"
											aria-selected="false"
										>
											Expense
										</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active" id="income" role="tabpanel" aria-labelledby="income-tab">
										<AddIncome />
									</div>
									<div className="tab-pane fade" id="expense" role="tabpanel" aria-labelledby="expense-tab">
										<AddExpense />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeScreen;
