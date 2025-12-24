import { TabProps } from "../types/tab.types";

const Tab: React.FC<TabProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center space-x-2 px-6 py-3 rounded-[11px] border-[1px] transition-all min-h-[85px] ${
        active 
          ? 'border-[#603F8B] bg-transparent text-[#230B34]' 
          : 'border-[#EEEEFF] text-[#B1BDCA]'
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-circular font-medium whitespace-nowrap flex-shrink-0">{label}</span>
      {active && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Tab;