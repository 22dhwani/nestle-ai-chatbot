import ChatWidget from './components/ChatWidget'

function App() {
  // Show a different background image depending on screen size:
  // Use a mobile-optimized image for small and medium screens
  // Switch to the full desktop version on large screens and above
  return (
    <div
      className="relative h-screen w-screen  bg-no-repeat bg-cover bg-center
        bg-[url('/nestle-bg-mobile.png')]
       
        lg:bg-[url('/nestle-bg.png')]"

    >
      <ChatWidget />
    </div>
  );
}

export default App;
