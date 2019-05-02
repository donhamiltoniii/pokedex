function getRequest(location, callback) {
  fetch(location)
    .then(res => res.json())
    .then(data => callback(data));
}

export default {
  getRequest
};
