import { create } from "apisauce";
import keyStore from "./keyStore";
const apiClient = create({
  baseURL: "https://moneymanagerbackend.herokuapp.com/api/",
});

async function get(route, defaultResult, params) {
  console.log(keyStore.getAuthToken());
  const response = await apiClient.get(route, params, {
    headers: {
      Authorization: keyStore.getAuthToken(),
    },
  });

  console.log(response);
  if (response.ok) return response.data;

  return defaultResult;
}

async function post(route, data, defaultResult) {
  const response = await apiClient.post(route, data, {
    headers: {
      Authorization: keyStore.getAuthToken(),
    },
  });
  if (response.ok) return response.data;

  return defaultResult;
}

export { get, post };
