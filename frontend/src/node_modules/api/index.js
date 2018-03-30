import request from 'superagent'

const baseUrl = 'http://localhost:3050/';


export const getUsers = async () => {
 const {body} = await request.get(
        baseUrl + 'users'
    );
    return body
};

