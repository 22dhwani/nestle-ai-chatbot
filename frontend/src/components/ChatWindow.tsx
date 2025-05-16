import { X } from 'lucide-react';

type ChatWindowProps = {
    onClose: () => void;
    botName: string;
    isVisible: boolean;
};

function ChatWindow({ onClose, botName, isVisible }: ChatWindowProps) {
    return (
        <div
            className={`
        bg-white rounded-lg shadow-2xl
        w-[90vw] sm:w-[85vw] md:w-96 lg:w-[30vw]
        h-[80vh] max-h-[600px]
        flex flex-col overflow-hidden
        transform transition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
        >
            {/* Header: shows botName and a close button, styled in Nestlé purple */}
            <div className="bg-nestle text-white px-3 py-2 lg:px-4 lg:py-3 flex justify-between items-center text-sm lg:text-base">
                <span className="font-semibold">{botName}</span>
                <button onClick={onClose}>
                    <X className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
            </div>

            {/* Message area: scrollable region where chat messages will appear */}
            <div className="flex-1 px-3 py-2 lg:px-4 lg:py-4 overflow-y-auto text-sm lg:text-base">
                <p className="text-gray-500">Chat history coming soon...</p>
            </div>

            {/* Input row: text field and Send button for user queries */}
            <div className="px-3 py-2 lg:px-4 lg:py-3 border-t flex">
                <input
                    type="text"
                    className="flex-1 p-2 lg:p-3 border border-gray-300 rounded-l-md outline-none text-sm lg:text-base"
                    placeholder="Ask me anything..."
                />
                <button className="bg-nestle-light text-white px-3 lg:px-4 text-sm lg:text-base rounded-r-md">
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
