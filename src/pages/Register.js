import {useState }from "react"
import {useNavigate} from "react-router-dom"
import {auth} from "../auth/firebase-config"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
// import {auth} from "../auth/firebase-config"
// import {createUserWithEmailAndPassword} from "firebase/auth"

// import { useState } from "react";
const Register = () => {
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState();
    const [lastName,setlastName] = useState();
    const [email,setEmail] = useState()
    const [password,setPassword]= useState()
    // const [firstName, setFirstName] = useState();
    // const [lastName, setlastName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const handleSubmit = async() => {
        const displayName = firstName + " " + lastName;
        try {
            let user = await createUserWithEmailAndPassword(auth,email,password);
            await updateProfile (auth.currentUser, {displayName : displayName})
            // console.log(auth.currentUser);
            // console.log(user);
                navigate("/")
        } catch (error) {
            alert(error.message)
        }
        // try {
        //     let user = await createUserWithEmailAndPassword(auth,email,password)
        //     console.log(user);
        // } catch (error) {
            
        // }
    }
    return (
      <div className="register">
        <div className="form-image">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        <div className="register-form">
          <h1 className="form-title display-3">Register</h1>
          <form id="register">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label display-4">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Enter your first name..."
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label display-4">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter your last name..."
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label display-4">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label display-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="button"
              className="btn btn-primary form-control"
              value="Register"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    );
}
export default Register;
