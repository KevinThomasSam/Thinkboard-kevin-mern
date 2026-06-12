import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import api from "../lib/axios";


const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            toast.error("Please fill in both title and content.");
            return;
        } 

        setLoading(true);

        try {
            await api.post("/notes", { title, content });
            toast.success("Note created successfully.");
            navigate("/");
        } 
        
        catch (error) {
            console.log(error);
            if (error.response && error.response.status === 429) {
                toast.error("You are being rate limited. Please wait and try again.", { duration: 5000 });
            } else {
                toast.error("Error creating note.");
            }
        } 
        
        finally {
            setLoading(false);
        }
    };

    return <div className="min-h-screen">
        <div className="page-container">
            <div className="mx-auto max-w-2xl">
                <Link to="/" className="btn btn-ghost btn-sm mb-5 rounded-xl">
                    <ArrowLeftIcon className="h-5 w-5" />
                    Back to Notes
                </Link>

                <div className="surface-card">
                    <div className="card-body p-6 sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">New thought</p>
                        <h2 className="card-title mb-2 text-3xl tracking-tight">Create a note</h2>
                        <p className="mb-4 text-sm text-base-content/55">Give your idea a clear title, then let it unfold.</p>
                        <form onSubmit={handleSubmit}>

                            <div className="form-control mb-4">
                                <label className= "label">
                                    <span className="label-text">Title</span>
                                </label>
                                        <input
                                            type="text"
                                            placeholder="Note Title"
                                            className="input input-bordered field-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            />
                            </div>
                                
                            <div className="form-control mb-4">
                                <label className= "label">
                                    <span className="label-text">Content</span>
                                </label>
                                        <textarea
                                            placeholder="Write your note here..."
                                            className="textarea textarea-bordered field-control h-40 resize-none"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            />
                            </div>

                            <div className="card-actions mt-6 justify-end">
                                    <button type="submit" className="btn btn-primary rounded-xl px-6" disabled={loading}>
                                        {loading ? "Creating..." : "Create Note"}
                                    </button>
                                </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>;    
};

export default CreatePage;
