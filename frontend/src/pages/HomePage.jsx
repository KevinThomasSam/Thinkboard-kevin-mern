import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Notecard from "../components/Notecard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
    const [israteLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");

                if (!Array.isArray(res.data)) {
                    throw new Error("The notes API returned an invalid response.");
                }

                setNotes(res.data);
                setIsRateLimited(false);  
            } catch (error) {                
               
                console.error("Error fetching notes:", error);
                console.log(error);
                if (error.response && error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("An error occurred while fetching notes. Please try again later.");
                }
            }    
                finally {
                    setLoading(false);
                }
                   
        };

        fetchNotes();
    }, []);

    return <div className="min-h-screen">
        <Navbar />
        {israteLimited && <RateLimitedUI />}
        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center text-primary">Loading...</div>}

            {notes.length === 0 && !israteLimited && <NotesNotFound /> }

            {notes.length > 0 && !israteLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <Notecard key={note._id} note={note} setNotes={setNotes}/>
                    ))}
                </div>
            )}
        </div>
    </div>;
};

export default HomePage;
