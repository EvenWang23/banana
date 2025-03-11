import {Route, Routes} from "react-router-dom";
import Message from '@pages/Message'
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/message" element={<Message />} />
        </Routes>
    );
}

export default App;
