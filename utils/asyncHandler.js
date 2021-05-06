const asyncHandler = (controllerMethod) => (res, req, next) =>
  Promise.resolve(controllerMethod(res, req, next)).catch(next);

module.exports = asyncHandler;