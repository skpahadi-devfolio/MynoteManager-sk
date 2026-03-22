//Fetch API call for the contact form in inside the pages folder contact page

export const contactform = async (formdata) => {
    try {
        const response = await fetch("https://mynotemanager-sk.onrender.com/api/contact", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata)
        })
        const result = await response.json()
        return result
    } catch (error) {
        alert("your Message is not sent succesfully!: ", error);
    }
}