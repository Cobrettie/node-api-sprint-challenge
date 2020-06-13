module.exports = (format) => {
  return (req, res, next) => {
    switch (format) {
      case "short":
        console.log(`${req.method} req method, ${req.url} url path, ${Date.now()}`)
        break
      
      case "long":
      default:
        // gives date and time without a timezone
        const time = new Date().toISOString()
        console.log(`${req.method} req method, ${req.url} url path, ${time}`)
    }

    next()
  }
}