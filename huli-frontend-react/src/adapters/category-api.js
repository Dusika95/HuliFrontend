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
    }