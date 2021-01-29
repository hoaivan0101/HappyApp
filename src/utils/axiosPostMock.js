let user = {
    data:[
    {username:'hoaivan0101',password:'ABC123123'},
    {username:'user1234',password:'ABC123123'},
    {username:'adminadmin',password:'ABC123123'},
    {username:'adminadminadmin',password:'ABC123123'},
    {username:'naruto123',password:'abc123123'}]
}

localStorage['data'] = JSON.stringify(user);
const data = JSON.parse(localStorage['data']);

export default (url, body) => {
        // axios.post(url, body, { withCredentials: false })
        //   .then(response => {
        //          return response
        //    });
    let check = false;
    data.data.forEach((item) => { 
        if (item.username === body.username && item.password.trim() === body.password.trim()) {
            check = true;
            return false;
        }
    });
    return check ? {
        status: 200,
        message: 'OK',
        success: true,
        token: 'kjdlfjasldfuiodsjflkajsdflkjsadflksjfdlkj'
    } : {
        status: 200,
        message: 'Unauthorized',
        success: false,
        error: 'USERNAME OR PASSWORD INCORRECT'
    };
}
   
