import * as client from "./apiClient";
import keyStore from "./keyStore";

async function isAuthorized() {
  return await client.get("/user/isAuthorized", false, {});
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
  if (!token || token.length == 0) return false;

  keyStore.setAuthToken(token);

  return true;
}

export { isAuthorized, registerUser, loginUser };
