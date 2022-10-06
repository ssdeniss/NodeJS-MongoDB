module.exports = (baseUrl) => (req, res) => {
    const parseUrl = new URL(req.url, baseUrl)
    const params = {}
    parseUrl.searchParams.forEach((value, key) => params[key] = value)

    req.pathname = parseUrl.pathname
    req.params = params
}