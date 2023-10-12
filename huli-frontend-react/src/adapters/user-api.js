const basePath = "http://localhost:8080";

function getToken() {
  return JSON.parse(sessionStorage.getItem("user")).jwtToken;
}

const api = {
  get: (endpoint) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + getToken(),
        "Access-Control-Allow-Origin": "*"
      },
    }),
    post: (endpoint, body) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : "*"
      },
      body: body && JSON.stringify(body),
    }),
  delete: (endpoint) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + getToken(),
        "Access-Control-Allow-Origin": "*"
      },
    }),
};

export { api };
