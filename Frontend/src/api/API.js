const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://ec2-100-24-48-185.compute-1.amazonaws.com:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/operations/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log("message",response.message);
            console.log("after message");
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const signup = (payload) =>
    fetch(`${api}/operations/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {

            console.log(response.UserName+" "+response.email);
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const temp = (payload) =>
    fetch(`${api}/operations/temp`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const humid = (payload) =>
    fetch(`${api}/operations/humid`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const post = (payload) =>
    fetch(`${api}/operations/getMovieHalls`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {


            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const table = (payload) =>
    fetch(`${api}/operations/table`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const addsen = (payload) =>
    fetch(`${api}/operations/addsensor`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const view = (payload) =>
    fetch(`${api}/operations/viewsensors`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const deletesen = (payload) =>
    fetch(`${api}/operations/delsensor`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(payload);
            return response;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });