import React,{useEffect, useState} from "react";
function NoteApp(){
const[notes,setNotes]= useState([]);
const[newnotes,setNewNotes] =useState("");

const[editIndex,setEditIndex]=useState(null);
const[editText,setEditText]=useState("");
// editing 
const editNote = (index)=>{
    setEditIndex(index);
    setEditText(notes[index]);
};

// fn to save the edited note 
const saveNote = () =>{
    if (editIndex === null) return;
    const updatedNotes=[...notes];
    updatedNotes[editIndex]=editText;
    setNotes(updatedNotes);
    setEditText("");
    setEditIndex(null);
};

// caller function
const addNote = ()=> {
    if(newnotes.trim()=== "")return ;
    setNotes([...notes,newnotes]);// add new notes
    setNewNotes("");// clear i/p field
};

const deleteNote =(index)=>
    setNotes(notes.filter((_,i)=> i!==index));

useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes") || "[]"));
  }, []);
  

  useEffect(() => {
    if (notes.length > 0) { // Save only if notes exist
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);
  
    
return (
    <div>
    <input
        type="text"
        placeholder="Type"
        value={newnotes}
        onChange={(e)=> setNewNotes(e.target.value)} />
        <button onClick={addNote}>Add NOTE</button> 
        <ul>
            {notes.map((note,index)=>(
                <li key={index}>
                    {editIndex === index ?(
                        <>
                        <input
                        type= "text"
                        value ={editText}
                        onChange={(e)=> setEditText(e.target.value)}
                        />  
                        <button onClick={saveNote}>save</button>
                        </>
                    ):(
                        <>
                        {note}
                        <button onClick={() => editNote (index)}>edit</button>
                        </>
                    )}
        
                <button onClick={() => deleteNote(index)}>delete</button>
                </li>
            ))}
        </ul>
        </div>
);
}   
export default NoteApp;