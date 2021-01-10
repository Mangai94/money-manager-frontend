const tokenKey = "u_auth_";

function getAuthToken() {
	return localStorage.getItem(tokenKey);
}

function setAuthToken(token) {
	localStorage.setItem(tokenKey, token);
}

function deleteAuthToken() {
	localStorage.removeItem(tokenKey);
}

var authTokenObj = { getAuthToken, setAuthToken, deleteAuthToken }

export default authTokenObj;
