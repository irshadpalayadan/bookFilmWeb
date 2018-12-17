const loginService = {
    login : function(username, password, callback) {
        return fetch("http://localhost:5000/api/auth/login?user=" + username + "&pass=" + password,{method: 'GET'})
    }
}

export default loginService;