import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p> HomePage</p>
    </div>
  );
};
