import {ChatEngine} from "react-chat-engine"
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
          height="100vh"
          projectID="153e743d-6180-4a26-a3e6-41c967252218"
          userName="elham"
          userSecret="elham@1381"
      />
    </div>
  );
}

export default App;