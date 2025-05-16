import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import ChatWindow from './ChatWindow';
import { MessageCircle, X } from 'lucide-react';

type ChatWidgetProps = {
    botName?: string;
    botIcon?: ReactElement;
};

function ChatWidget({
    botName = 'Ask Nestlé',
    botIcon = <MessageCircle className="w-6 h-6" />,
}: ChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showWindow, setShowWindow] = useState(false);

    // When isOpen changes, update showWindow after animation duration (1s)
    useEffect(() => {
        if (isOpen) {
            setShowWindow(true); // show immediately on open
        } else {
            // delay hiding chat window until scale animation completes (optional, here 0ms to hide immediately)
            const timeout = setTimeout(() => setShowWindow(false), 0);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <>
            {/* Chat window with only scale animation, no fading */}
            {showWindow && (
                <div
                    className={`
                        fixed bottom-20 right-8 z-50
                        transform
                        ${isOpen ? 'scale-100' : 'scale-90 pointer-events-none'}
                    `}
                >
                    <ChatWindow botName={botName} onClose={() => setIsOpen(false)} isVisible={isOpen} />
                </div>
            )}

            {/* Button container to group icon + tooltip */}
            <div className="fixed bottom-5 right-8 z-50 flex flex-col items-center group">
                {/* Tooltip text, hidden by default, shown on hover */}
                <span
                    className="
      absolute right-full mr-3 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      bg-nestle text-white text-xs rounded px-2 py-1
      whitespace-nowrap select-none pointer-events-none shadow-lg
      after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
      after:border-8 after:border-transparent after:border-l-nestle
    "
                    style={{ userSelect: 'none' }}
                >
                    Nestlé Chatbot
                </span>

                {/* Actual button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close chat' : 'Open chat'}
                    className="w-14 h-14 rounded-full shadow-lg bg-nestle hover:bg-nestle-800 text-white flex items-center justify-center"
                    style={{ perspective: 600 }}
                >
                    <div
                        className={`relative w-6 h-6 transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] ${isOpen ? 'rotate-y-180' : ''
                            }`}
                    >
                        {/* Front icon */}
                        <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                            {botIcon}
                        </div>

                        {/* Back icon */}
                        <div className="absolute inset-0 flex items-center justify-center rotate-y-180 [backface-visibility:hidden]">
                            <X className="w-6 h-6" />
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}

export default ChatWidget;
