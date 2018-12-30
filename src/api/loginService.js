const loginService = {
    signin : function(username, password, callback) {
        return fetch("http://localhost:5000/api/auth/signin?user=" + username + "&pass=" + password,{method: 'GET', credentials:'include'})
    },
    signup: function(username, email, phno, password, callback){
        return fetch("http://localhost:5000/api/auth/signup?user="+username+"&email="+email+"&phno="+phno+"&pass="+password,{method: 'POST', credentials:'include'})
    },
    checkSignInStatus: function() {
        return fetch('http://localhost:5000/api/auth/signinstatus', {method: 'GET', credentials:'include'});
    },
    getUserProfile: function() {
        return fetch('http://localhost:5000/api/auth/userprofile', {method: 'GET', credentials:'include'});
    },
    signout: function() {
        return fetch('http://localhost:5000/api/auth/signout', {method: 'GET', credentials:'include'});
    },
    google: 'http://localhost:5000/api/auth/google',
}

export default loginService;