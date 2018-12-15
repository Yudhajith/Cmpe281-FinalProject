import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const POST ="POST";
export const TEMP ="TEMP";
export const HUMID ="HUMID";
export const DASHBOARD ="DASHBOARD";
export const TABLE ="TABLE";
export const ADD ="ADD";
export const VIEW ="VIEW";
export const DEL ="DEL";

export function actionlogin(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.doLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
    return {
        type: SIGNUP,
        message: "inside Signup Actions",
        data:data
    }
}

export function actiontemp(userdata) {
    console.log("in action Temp");
    return function (dispatch) {
        try {

            API.temp(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Temp(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Temp(data) {
    console.log(data);
    return {
        type: TEMP,
        message: "inside TEMP Actions",
        data:data
    }
}

export function actionhumid(userdata) {
    console.log("in action Humid");
    return function (dispatch) {
        try {

            API.humid(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Humid(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Humid(data) {
    console.log(data);
    return {
        type: HUMID,
        message: "inside HUMID Actions",
        data:data
    }
}

export function Dashboard(data) {
    console.log(data);
    return {
        type: DASHBOARD,
        message: "inside DASHBOARD Actions",
        data:data
    }
}

export function actiontable(userdata) {
    console.log("in action Table");
    return function (dispatch) {
        try {

            API.table(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Table(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Table(data) {
    console.log(data);
    return {
        type: TABLE,
        message: "inside TABLE Actions",
        data:data
    }
}


export function topost(userdata) {
    console.log("in post job");
    return function (dispatch) {
        try {

            API.post(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(postup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function postup(data) {
    console.log(data);
    return {
        type: POST,
        message: "inside Signup Actions",
        data:data
    }
}


export function addsensor(userdata) {
    console.log("in post job");
    return function (dispatch) {
        try {

            API.addsen(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(toadd(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function toadd(data) {
    console.log(data);
    return {
        type: ADD,
        message: "inside Signup Actions",
        data:data
    }
}


export function actionview(userdata) {
    console.log("in post job");
    return function (dispatch) {
        try {

            API.view(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(toview(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function toview(data) {
    console.log(data);
    return {
        type: VIEW,
        message: "inside Signup Actions",
        data:data
    }
}


export function actiondelete(userdata) {
    console.log("in post job");
    return function (dispatch) {
        try {

            API.deletesen(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(todel(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function todel(data) {
    console.log(data);
    return {
        type: DEL,
        message: "inside Signup Actions",
        data:data
    }
}