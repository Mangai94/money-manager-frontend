import * as client from "./apiClient";
import keyStore from "./keyStore";

async function isAuthorized() {
	return await client.get("/user/details", null, {});
}

async function registerUser(userName, emailId, password) {
	const token = await client.post(
		"/user",
		{
			userName,
			emailId,
			password,
		},
		""
	);
	if (!token || token.length === 0) return false;

	keyStore.setAuthToken(token);

	return true;
}

async function loginUser(userName, password) {
	const token = await client.post(
		"/user/login",
		{
			userName: userName,
			password: password,
		},
		""
	);
	if (!token || token.length === 0) return false;

	keyStore.setAuthToken(token);

	return true;
}

function logOut() {
	keyStore.deleteAuthToken();
}

export { isAuthorized, registerUser, loginUser, logOut };
