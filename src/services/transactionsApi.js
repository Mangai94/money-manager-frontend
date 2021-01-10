import * as client from "./apiClient";

async function addNewTransaction(type, amount, division, category, description, date) {
	const transactionData = {
		type,
		amount: parseFloat(amount),
		division,
		category,
		description,
		date,
	};
	const result = await client.post("transactions", transactionData, {});
	if (result.id) return true;

	return false;
}

async function getDaywiseTransactions() {
	return await client.get("transactions", [], {});
}

const clientEndpoints = {
	addNewTransaction,
	getDaywiseTransactions,
};
export default clientEndpoints;
