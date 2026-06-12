import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { useEffect } from "react";
import api from "../lib/axios";
import { toast } from "react-hot-toast";

const NoteDetailPage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`);
                setNote(res.data);
            } catch (error) {
                console.error("Error fetching note:", error);
                toast.error("An error occurred while fetching the note. Please try again later.");
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchNote();
    }, [id, navigate]);

const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
        await api.delete(`/notes/${id}`);
        toast.success("Note deleted successfully");
        navigate("/");
    } catch (error) {
        console.error("Error deleting note:", error);
        toast.error("An error occurred while deleting the note. Please try again later.");
    }
}
const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
        toast.error("Title and content cannot be empty.");
        return;
    }
    setSaving(true);
    try {
        await api.put(`/notes/${id}`, note);
        toast.success("Note updated successfully");
        navigate("/");
    } catch (error) {
        console.log("Error updating note:", error);
        toast.error("An error occurred while updating the note. Please try again later.");
    } finally {
        setSaving(false);
    }
};

    console.log("Note ID from URL:", id);

    if (loading) {
        return ( <div className="min-h-screen flex items-center justify-center">
            <LoaderIcon className="animate-spin size-6 text-primary" />
        </div>
    )
}

    if (!note) {
        return null;
    }

    return (
        <div className="min-h-screen">
            <div className="page-container">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-xl">
                            <ArrowLeftIcon className="size-5" />
                            Back to Notes
                        </Link>
                        <button onClick={handleDelete} className="btn btn-error btn-outline btn-sm rounded-xl">
                            <Trash2Icon className="size-5" />
                            Delete Note
                        </button>
                    </div>

                    <div className="surface-card">
                        <div className="card-body p-6 sm:p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Edit note</p>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Note Title"
                                    className="input input-bordered field-control"
                                    value={note.title}
                                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                            <textarea
                                className="textarea textarea-bordered field-control h-48 resize-none"
                                placeholder="Write your note content here..."
                                value={note.content}
                                onChange={(e) => setNote({ ...note, content: e.target.value })}
                            />
                        </div>
                           
                            <div className="card-actions mt-6 justify-end">
                                <button className={`btn btn-primary rounded-xl px-6 ${saving ? "loading" : ""}`} onClick={handleSave}>
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NoteDetailPage;
