const basePath = "http://localhost:8080";

function getToken() {
    return JSON.parse(sessionStorage.getItem("user")).jwtToken;
}

  const api = {
    get: (endpoint) =>
      fetch(`${basePath}/${endpoint}`, {
        method: "GET",
        headers: {
          
          "Access-Control-Allow-Origin": "*",
        },
      }),
    post:(endpoint, body) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + getToken(),
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: body && JSON.stringify(body),
    })
    }