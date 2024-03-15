import { useGetUsersQuery } from "./UsersSlice";
import User from "../User/User";
import { useSelector } from "react-redux";

function Users() {
  const { isSuccess } = useGetUsersQuery();

  const users = useSelector((state) => state.users);
  return (
    <div>
      {isSuccess &&
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
}

export default Users;
