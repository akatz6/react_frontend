import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../components/Auth/AuthSlice";
export default function registerLoginForm({ state }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const submit = async (e) => {
    e.preventDefault();

    try {
      let success = false;
      if (state === "Login") {
        success = await login(form).unwrap();
      } else {
        success = await register(form).unwrap();
      }

      if (success) {
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onKeyUp={updateForm}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            autoComplete="on"
            onKeyUp={updateForm}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {state}
        </button>
      </form>
    </div>
  );
}
