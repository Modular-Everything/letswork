export function hasProtocol(url) {
  const CHECK_HTTP = new RegExp(/http*/g);
  return CHECK_HTTP.test(url) ? url : `https://${url}`;
}
