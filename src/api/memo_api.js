function getHeader() {
  const headers = {
    accept: "application/json",
    "content-type": "application/json"
  };
  return headers;
}
function getBody(body) {
  return {
    ...body
  };
}
const baseApiUrl = "http://localhost:3000";
export function buildApi(method, subUrl, body = {}) {
  const myBody = getBody(body);
  const bodyData = JSON.stringify(myBody);
  const header = getHeader();
  const options = {
    method: method,
    headers: header
  };
  if (method === "POST" || method === "PUT") {
    options["body"] = bodyData;
  }
  return fetch(baseApiUrl + subUrl, options)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw {
        type: "api",
        error: error
      };
    });
}

export function getMemos() {
  return buildApi("GET", "/memos");
}

export function getLabels(obj) {
  if (!obj["populate"]) {
    return buildApi("GET", "/labels?populate=false");
  }
  return buildApi("GET", "/labels");
}

export function AddLabel(obj) {
  return buildApi("POST", "/labels", obj);
}
