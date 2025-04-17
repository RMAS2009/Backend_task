<h1>Secure REST API for User Authentication
</h1>
This is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database.

<h2>Features</h2>
 <ul>
      <li>User sign up and login with NID and password</li>
   <li> Used Passport.js for authentication [Log In System].
   </li>
      <li>Once logged in, user will get a JWT token.Using the token,user can see his own details.
      </li>
   <li>User don't have to give login credentials while having token.</li>
      <li>Only Admin can see details of all the users [ Role Based Authentication].
      </li>
    <li>Used Stripe for payment integration.
      </li>
   <li>Used Bcrypt.js for password hashing
      </li>
   <li>Error handling and validation for API requests
      </li>
    </ul>

 
  <h2>Technologies Used</h2>
 <ul>
      <li>Node.js</li>
      <li>Express.js
      </li>
   <li>MongoDB</li>
      <li>JSON Web Tokens (JWT)
      </li>
 <li>Bcrypt.js
      </li>
  <li>Stripe
      </li></ul>

<h1>Api Endpoints</h1>
      
  <h2>Authentication</h2>    

  <h3>Sign Up</h3>
    <ul>
      <li><b>POST /auth/ register</b>: Register a new user(stored hashed password)</li>
    </ul>
  <h3>Login</h3>
    <ul>
      <li><b>POST /auth/login</b>: Authenticate user (return JWT token)</li>
    </ul>


  <h2>User Profile</h2>

  <h3>Get Profile</h3>
    <ul>
      <li><b>GET /auth/me</b>: Get user profile information[Using JWT Token]</li>
    </ul>
    

    
<h2>Admin Access</h2>
  <h3>Get All Users Profile</h3>
    <ul>
      <li><b>GET /auth/allUser</b>: Get all users profile information [Using JWT Token and Role Based Authentication]</li>
    </ul>
    <h3>Payment Integration</h3>
    <ul>
      <li><b>POST /payments/checkout </b>: Using stripe.</li>
    </ul>




<h2> Setup the project </h2>
    
 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 N.B.: I've given the .env file,as many will find it difficult to run the project without Stripe_Secret_key.

  

      
