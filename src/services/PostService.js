import Api from "../config/Api.js";

export async function listUsers() {
  try {
    const response = await Api.get("users");
    return response;
  } catch (error) {
    return error.response;
  }
}
