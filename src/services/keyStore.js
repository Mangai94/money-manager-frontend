const tokenKey = "u_auth_";

function getAuthToken() {
  return localStorage.getItem(tokenKey);
}

function setAuthToken(token) {
  localStorage.setItem(tokenKey, token);
}

export default { getAuthToken, setAuthToken };
