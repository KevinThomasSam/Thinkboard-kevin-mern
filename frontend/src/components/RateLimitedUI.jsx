import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="page-container pb-0">
      <div className="surface-card border-warning/30">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center">
                <ZapIcon className="size-8 text-warning" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">
                Rate Limit Reached
              </h2>

              <p className="text-base-content/70 mt-1">
                You're creating notes a little too quickly. Please wait a
                moment before creating another note.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
