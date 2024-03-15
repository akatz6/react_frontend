import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdatesUserMutation } from "../Users/UsersSlice";
import { useNavigate } from "react-router-dom";
export default function Edit() {
  const user = useSelector((state) => state.user.value);

  const [updatesUser] = useUpdatesUserMutation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setEmail(user.email);
  }, []);

  const update = (e) => {
    setEmail(e.target.value);
  };

  const updateUser = (e) => {
    e.preventDefault();
    const body = {
      email,
      password: user.password,
    };
    const obj = {
      id: user.id,
      body,
    };
    updatesUser(obj);
    navigate("/users");
  };
  return (
    <div>
      <form onSubmit={updateUser}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={update}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Email
        </button>
      </form>
    </div>
  );
}
