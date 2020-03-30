const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

const TYPE_APPLICATION_JSON = 'application/json';

const jsonOk = function(data, message = 'Successful request', metadata = {}) {
  const status = STATUS_OK;
  this.status(status);
  this.type(TYPE_APPLICATION_JSON);
  return this.json({ message, data, metadata, status });
};

const jsonBadRequest = function(data, message = 'Bad request', metadata = {}) {
  const status = STATUS_BAD_REQUEST;
  this.status(status);
  this.type(TYPE_APPLICATION_JSON);
  return this.json({ message, data, metadata, status });
};

export const response = (req, res, next) => {
  res.jsonOk = jsonOk;
  res.jsonBadRequest = jsonBadRequest;
  next();
};
