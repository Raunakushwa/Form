import { useState } from "react"


export const Registration = () => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "firstName":
                setFirstname(value);
                break;
            case "lastName":
                setLastname(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phone":
                setPhoneNumber(value);
                break;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        }
        console.log(formdata);

    }


    return (
        <>
            <form onSubmit={handleFormSubmit} >
                <div className="container">
                    <h1>sign up</h1>
                    <p>please fill in the details to register</p>
                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text" placeholder="Enter Firstname" name="firstName" required value={firstName} onChange={handleInputChange} />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text" placeholder="Enter Lastname" name="lastName" required value={lastName} onChange={handleInputChange} />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={handleInputChange} />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={handleInputChange} />


                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input type="phone" placeholder="Enter Phone Number" name="phone" required value={phoneNumber} onChange={handleInputChange} />
                    <p>By creating an account you agree to our
                        <a href="#" style={{ color: "blue" }} >Terms and conditions</a>
                    </p>


                    <div className="clearfix">
                        <button type="submit" className="btn" >Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    )
}