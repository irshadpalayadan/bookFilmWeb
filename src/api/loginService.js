const loginService = {
    login : function(username, password, callback) {
        return fetch("http://localhost:5000/api/auth/signin?user=" + username + "&pass=" + password,{method: 'GET'})
    },
    signup: function(username, email, phno, password, callback){
    /*
        TODO: corse correction needed .. clean all console error
    */

        return fetch("http://localhost:5000/api/auth/signup?user="+username+"&email="+email+"&phno="+phno+"&pass="+password,{method: 'POST'})
    },
    google: function()  {
        return fetch('http://localhost:5000/api/auth/google',{method: 'GET', 'Access-Control-Allow-Origin': '*'});
    },
}

export default loginService;