
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
        className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200
        border-t-4 border-solid border-[#00ff9d]">
        <div className="card-body">
            <h3 className="card-title">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>
                <div className="flex items-center gap-1">
                    <div className="btn btn-ghost btn-xs text-info">
                        <PenSquareIcon className="w-4 h-4 " />
                    </div>
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default Notecard
