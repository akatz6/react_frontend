import { useDispatch } from "react-redux";
import { setUserToBeEdited } from "./UserSlice";
import { useNavigate } from "react-router-dom";

export default function User({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(setUserToBeEdited(user));
    navigate(`/edit/${user.id}`);
  };
  return (
    <div className="indUser">
      <p>{user.email} </p>
      <button type="button" className="btn btn-primary" onClick={edit}>
        Edit
      </button>
    </div>
  );
}
