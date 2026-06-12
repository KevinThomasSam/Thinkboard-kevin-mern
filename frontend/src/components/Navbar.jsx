import { Link } from "react-router";
import { LightbulbIcon, PlusIcon } from "lucide-react";

const Navbar = () => {
return ( 
    <header className="sticky top-0 z-20 border-b border-base-content/10 bg-base-300/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 transition group-hover:bg-primary/15">
                        <LightbulbIcon className="size-5 text-primary" />
                    </span>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">Thinkboard</h1>
                        <p className="hidden text-xs text-base-content/50 sm:block">Ideas worth keeping</p>
                    </div>
                </Link>
                <div className="flex items-center gap-3">
                    <Link to="/create" className="btn btn-primary btn-sm rounded-xl sm:btn-md">
                        <PlusIcon className="size-5" />
                        <span className="hidden sm:inline">New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Navbar;
