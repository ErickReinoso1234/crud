import { useAuth } from "..//context/AuthContext";
function Taskpage() {
  const { user } = useAuth();
  console.log("User:", user);
  return (
    <div>
      <h1>Taskpage</h1>
    </div>
  );
}
export default Taskpage;
