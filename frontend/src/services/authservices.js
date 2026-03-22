//Fetch API Call for auth connection for login and signup page:-


//Fetch Call for Login Page:-
export const Logincheck = async (logindata) => {
    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logindata)
        })
        const result = await response.json()
        return result
        
    } catch (error) {
        alert("API Error for Login :", error);
    }
}



//Fetch API for Signup Page:-
export const Signupcheck = async(signupdata) => {
    try {
        const response = await fetch("http://localhost:3000/api/signup", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupdata)
        })
        const result = await response.json()
        return result
    } catch (error) {
        alert("API Error for Signup:", error);
    }
}