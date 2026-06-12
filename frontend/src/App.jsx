import { Routes,Route } from "react-router"

import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import NoteDetailPage from "./pages/NoteDetailPage"


const App = () => {
  return (
    <div className="page-shell">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-base-300" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,#a3e6351f,transparent_65%)]" />
      <div className="pointer-events-none fixed -right-32 top-48 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/create" element={<CreatePage /> } />
        <Route path="/note/:id" element={<NoteDetailPage /> } />
      </Routes>
    </div>
  );
};

export default App
