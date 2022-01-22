// Access Token
// GET /api/user-access-token

// Search
// GET /api/data?search_string=

// Format
// POST /api/data
const BACKEND = 'http://3.108.225.220:5000'

function getAccessToken() {
    return fetch(BACKEND + '/api/user-access-token').then(res => res.json())
}

function performSearch(query, accessToken) {
    return fetch(`${BACKEND}/api/data?search_string=${Number(query)}`, {
        method: "GET",
        headers: {
            "user-access-token": accessToken,
        },
    }).then(res => res.json())
}


// Document is not clear for this api
function getStockResults(data, accessToken) {
    const convertToProperData = (data) => {
        return data.map(d => ({
            name: d[0],
            ltp: d[1],
            lcp: d[2]
        }))
    }
    return fetch(`${BACKEND}/api/data`, {
        method: "POST",
        body: JSON.stringify(convertToProperData(data)),
        headers: {
            "Content-Type": "application/json",
            "user-access-token": accessToken,
        },
    }).then(res => res.json())
}


export { getAccessToken, performSearch, getStockResults }