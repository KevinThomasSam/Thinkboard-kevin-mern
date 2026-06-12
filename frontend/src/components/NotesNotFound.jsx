import { FileTextIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="surface-card mx-auto flex max-w-2xl flex-col items-center justify-between gap-6 p-8 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10">
            <FileTextIcon className="size-7 text-primary" />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-base-content">
              Your board is ready
            </h2>
            <p className="text-sm text-base-content/70 mt-1">
              Capture your first thought and build from there.
            </p>
          </div>
        </div>

        <Link to="/create" className="btn btn-primary btn-sm shrink-0 rounded-xl">
          Create Note
        </Link>
    </div>
  );
};

export default NotesNotFound;
