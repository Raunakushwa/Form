import { useState } from "react"


export const RegistrationFormReact = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);

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
                    <input type="text" placeholder="Enter Firstname" name="firstName" required value={user.firstName} onChange={handleInputChange} />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text" placeholder="Enter Lastname" name="lastName" required value={user.lastName} onChange={handleInputChange} />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" required value={user.password} onChange={handleInputChange} />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" required value={user.email} onChange={handleInputChange} />


                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <input type="phone" placeholder="Enter Phone Number" name="phoneNumber" required value={user.phoneNumber} onChange={handleInputChange} />
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