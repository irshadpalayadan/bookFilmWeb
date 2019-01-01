const baseUrl = 'http://localhost:5000';
const loginService = {
    signin : function(username, password, callback) {
        return fetch( baseUrl + "/api/auth/signin?user=" + username + "&pass=" + password,{method: 'GET', credentials:'include'})
    },
    signup: function(username, email, phno, password, callback){
        return fetch( baseUrl + "/api/auth/signup?user="+username+"&email="+email+"&phno="+phno+"&pass="+password,{method: 'POST', credentials:'include'})
    },
    checkSignInStatus: function() {
        return fetch( baseUrl + '/api/auth/signinstatus', {method: 'GET', credentials:'include'});
    },
    getUserProfile: function() {
        return fetch( baseUrl + '/api/auth/userprofile', {method: 'GET', credentials:'include'});
    },
    signout: function() {
        return fetch( baseUrl + '/api/auth/signout', {method: 'GET', credentials:'include'});
    },
    google:  baseUrl + '/api/auth/google',
}

export default loginService;