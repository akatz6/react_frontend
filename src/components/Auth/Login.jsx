import { useState } from "react";
import { useLoginMutation } from "./AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const success = await login(form).unwrap();
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
          Submit
        </button>
      </form>
    </div>
  );
}
