function ResponseObject(success = false, value = '', message = '') {
  return {
    message,
    success,
    value,
  };
}
export default ResponseObject;
