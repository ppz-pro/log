const config = {
  now: () => new Date()
}

module.exports = {
  config,
  debug() {
    console.debug(`[debug ${config.now()}]`, ...arguments)
  },
  info() {
    console.log(`[info ${config.now()}]`, ...arguments)
  },
  warn() { // 如果一件事做得不好，应直接判定为 error，除非，，，
    console.warn(`[warn ${config.now()}]`, ...arguments)
  },
  error() {
    console.error(`[error ${config.now()}]`, ...arguments)
  }
}
