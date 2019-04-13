const buildResponse = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body)
});

export const responseSuccess = body => buildResponse(200, body);

export const responseError = body => buildResponse(500, body);
