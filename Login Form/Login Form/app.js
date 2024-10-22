const signUp = (e) => {
    e.preventDefault(); 

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    var user = {
        username: username,
        email: email,
        password: password
    };

    
    localStorage.setItem('user', JSON.stringify(user));

    
    var signupMessage = document.getElementById("signup-message");
    signupMessage.style.display = "block"; 
    alert("Signup Successful!");

    
    transformToLogin();
};


const transformToLogin = () => {
    
    document.getElementById('form-title').innerText = "Login Form";
    document.getElementById('submit-btn').value = "Login";

    
    document.getElementById('email').parentElement.style.display = 'none';


    const form = document.getElementById('auth-form');
    form.onsubmit = login;
};


const login = (e) => {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var storedUser = JSON.parse(localStorage.getItem('user'));

    
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        
        window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
    } else {
        alert("Invalid username or password!");
    }
};
