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

export function getLabel(id) {
  return buildApi("GET", `/labels/${id}`);
}

export function AddMemo(id) {
  return buildApi("POST", `/labels/${id}/memos`);
}

export function updateLabel(id, obj) {
  return buildApi("PUT", `/labels/${id}`, obj);
}

export function getMemo(id) {
  return buildApi("GET", `/memos/${id}`);
}

export function delLabel(id) {
  return buildApi("DELETE", `labels/${id}`);
}

export function updateMemo(id, obj) {
  return buildApi("PUT", `/memos/${id}`, obj);
}

export function delMemo(id) {
  return buildApi("DELETE", `/memos/${id}`);
}
export function createMemo(obj) {
  return buildApi("POST", `/memos`, obj);
}
