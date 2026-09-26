function getSystemStatus(env = 'production') {
  return `System active in ${env} environment.`;
}
module.exports = { getSystemStatus };