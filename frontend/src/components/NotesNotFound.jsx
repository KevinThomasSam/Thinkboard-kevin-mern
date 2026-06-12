import { FileTextIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex justify-center py-12 px-4">
      <div className="flex items-center gap-20">

        <div className="flex items-center gap-6">

          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileTextIcon className="size-6 text-primary" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-base-content">
              No Notes Found
            </h2>

            <p className="text-sm text-base-content/70 mt-1">
              Your workspace is empty. Create your first note.
            </p>
          </div>

        </div>

        <Link to="/create" className="btn btn-primary btn-sm">
          Create Note
        </Link>

      </div>
    </div>
  );
};

export default NotesNotFound;