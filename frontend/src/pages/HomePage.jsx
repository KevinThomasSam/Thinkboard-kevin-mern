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
        <main className="page-container">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your workspace</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Notes and ideas</h2>
                <p className="mt-2 text-base-content/55">A quiet place for everything worth remembering.</p>
            </div>

            {loading && <div className="flex justify-center py-16"><span className="loading loading-dots loading-lg text-primary" /></div>}

            {notes.length === 0 && !loading && !israteLimited && <NotesNotFound /> }

            {notes.length > 0 && !israteLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <Notecard key={note._id} note={note} setNotes={setNotes}/>
                    ))}
                </div>
            )}
        </main>
    </div>;
};

export default HomePage;
