//Fetch API Call for auth connection for login and signup page:-


//Fetch Call for Login Page:-
export const Logincheck = async (logindata) => {
    try {
        const response = await fetch("https://mynotemanager-sk.onrender.com/api/login", {
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
        const response = await fetch("https://mynotemanager-sk.onrender.com/api/signup", {
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