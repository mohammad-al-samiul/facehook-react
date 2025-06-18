import { Navbar } from "../components/common/Navbar";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { auth } = useAuth();

  return (
    <div>
      <Navbar />
      <p> HomePage</p>
      {auth.user && <p>user logged in</p>}
    </div>
  );
};
