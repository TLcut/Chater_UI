import Navbar from './Detail/navbar'
import Roombox from './Detail/room-box';
import Chatbar from './Detail/chatbar';
function App() {
  return (
    <div className="all">
      <Navbar/>
      <div className='main'>
        <Roombox/>
        <Chatbar/>
      </div>
    </div>
  );
}

export default App;
