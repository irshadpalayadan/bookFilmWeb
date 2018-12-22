const loginService = {
    login : function(username, password, callback) {
        return fetch("http://localhost:5000/api/auth/login?user=" + username + "&pass=" + password,{method: 'GET'})
    },
    signup: function(username, email, phno, password, callback){
    /*
        TODO: corse correction needed .. clean all console error
    */

        return fetch("http://localhost:5000/api/auth/signup?user="+username+"&email="+email+"&phno="+phno+"&pass="+password,{method: 'POST'})
        

    },
}

export default loginService;