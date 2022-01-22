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
    })
}

function formatData(data, accessToken) {
    return fetch(`${BACKEND}/api/data`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "user-access-token": accessToken,
        },
    })
}


export { getAccessToken, performSearch, formatData }