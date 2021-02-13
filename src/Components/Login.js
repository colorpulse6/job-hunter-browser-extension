import axios from "axios";
import config from "../config";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let target = e.target;

    var values = {
      email: target.email.value,
      password: target.password.value,
    };

    const { email, password } = values;
    axios
      .post(
        `${config.API_URL}/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.setItem("user", res.data);
        props.setIsAuthenticated(true)

        // console.log(res)
      })
      .catch((err) => {
        // setErrors(err.response.data.error);
        console.log(err);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Email" name="email" />
      <input type="text" placeholder="Password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
