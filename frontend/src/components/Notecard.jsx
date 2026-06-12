
import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';


const Notecard = ({ note,setNotes }) => {
    const handleDelete = async (e,id) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete this note?')) return;
        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter((note) => note._id !== id));
            toast.success('Note deleted successfully');
        } catch (error) {
            console.log("Error deleting note:", error);
            toast.error('Error deleting note');
        }
    }
  return (
    <Link to={`/note/${note._id}`}
        className="group card border border-base-content/10 bg-base-100/80 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
        <div className="card-body gap-3 p-5">
            <div className="mb-1 h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
            <h3 className="card-title line-clamp-1 text-lg">{note.title}</h3>
            <p className="min-h-16 text-sm leading-6 text-base-content/65 line-clamp-3">{note.content}</p>
            <div className="card-actions mt-3 items-center justify-between border-t border-base-content/10 pt-4">
                <span className="text-xs font-medium uppercase tracking-wide text-base-content/45">{formatDate(new Date(note.createdAt))}</span>
                <div className="flex items-center gap-1">
                    <div className="btn btn-ghost btn-xs rounded-lg text-primary">
                        <PenSquareIcon className="w-4 h-4 " />
                    </div>
                    <button className="btn btn-ghost btn-xs rounded-lg text-error" onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default Notecard
