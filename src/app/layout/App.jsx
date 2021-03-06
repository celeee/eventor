import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailed from "../../features/events/eventDetailed/EventDetailed";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import Navbar from "../../features/navbar/Navbar";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modal/ModalManager";
import { ToastContainer } from "react-toastify";
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import ProfilePage from "../../features/profiles/profilePage/ProfilePage";

function App() {
  const { initialized } = useSelector(state => state.async);

  if (!initialized) return <LoadingComponent content="Loading app..." />;

  return (
    <>
      <ModalManager />
      <ToastContainer position="bottom-right" hideProgressBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>

      <Container className="main">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="events" element={<EventDashboard />} />
            <Route path="events/:id" element={<EventDetailed />} />
            {["createEvent", "manage/:id"].map((path, index) => (
              <Route path={path} element={<EventForm />} key={index} />
            ))}
            <Route path="/account" element={<AccountPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/error" element={<ErrorComponent />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
