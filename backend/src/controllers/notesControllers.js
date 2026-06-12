import Note from "../models/note.js"



export async function getAllNotes(_,res) {
    try {
      const notes = await Note.find().sort({createAt:-1});
      res.status(200).json(notes)
        
    } catch (error) {
      console.error("Error in catch in getAllnotes controller", error)
      res.status(500).json({message:"error server"});
        
    }

}

export async function createNote(req,res) {
    try {
      const {title,content} = req.body
      const note = new Note({title, content})

      const savedNote = await note.save();
      res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"});
        
}
};


export async function updateNote(req,res) {
    try {
      const {title,content} = req.body
      const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content}, {
        new:true
      }); 

      if(!updatedNote) return res.status(404).json({message: "Nodenotfound"});


      res.status(200).json({ message: "Note updated succesfully"}); 
    } catch (error) {
      console.error("Error in updateNote controller", error);
      res.status(500).json({ message: "Internal server error"});
        
    };
}

export async function deleteNote(req,res) {
    try {
       const deletedNote = await Note.findByIdAndDelete(req.params.id);
       if(!deletedNote) return res.status(404).json({message: "Node not found"});
       res.json({ message: "Note deleted succesfully"}); 


    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internal server error"});

    };
}

export async function getNotebyId(req,res) {
    try {
      const note = await Note.findById(req.params.id); 

      if(!note) return res.status(404).json({message: "note for ID notfound"});
      res.status(200).json(note); 


    } catch (error) {
      console.error("Error in getbyId controller", error);
      res.status(500).json({ message: "Internal server error"});
        
    };
}