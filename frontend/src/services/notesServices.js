//All Notes API call Logic:-


//Get/All Notes  API:-
export const Getnotes = async()=>{
    try {
        const response = await fetch('http://localhost:3000/api/notes', {method: "GET", credentials: "include"})
        const result = await response.json()
        return result
    } catch (error) {
        alert("Failed to Load your all Notes!");
    }
}


//Create/Add note API:-
export const Addnotes = async(Adddata)=>{
    try {
        const response = await fetch('http://localhost:3000/api/addnotes', {method: "POST", credentials: "include", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Adddata)
        })
        const result = await response.json()
        return result
    } catch (error) {
        alert("Failed to Add your Notes!");
    }
}

//Edit note API:-
export const Editnotes = async(id,editdata)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/edit/${id}`, {method: "PUT", credentials: "include", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editdata)
        })
        const result = await response.json()
        return result
    } catch (error) {
        alert("Error to edit your notes PLease Try again!");
    }
}




//Delete note API:-
export const Deletenotes = async(id)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/delete/${id}`, {method: "DELETE", credentials: "include"})
        const result = await response.json()
        return result
    } catch (error) {
        alert("Failed to Delete your notes!");
    }
}
