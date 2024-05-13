import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import NotFoundpage from "./pages/NotFoundpage";
import CommunityPage from "./pages/CommunityPage";
import Chatpage from "./pages/Chatpage";
import Notificationpage from "./pages/Notificationpage";
import Profilepage from "./pages/Profilepage";
import Signup from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Eventpage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/chat" element={<Chatpage />} />
            <Route path="/notification" element={<Notificationpage />} />
            <Route path="/me" element={<Profilepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/*" element={<NotFoundpage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
