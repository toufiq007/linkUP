import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = async (formdata) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formdata
      );

      if (response.status === 200) {
        const { user, token } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`login time auth token ${authToken}`);
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (err) {
      // handling global errors
      setError("root.random", {
        type: "random",
        message: `User with email ${formdata.email} not found!!`,
      });
      console.log(err.message);
    }

    // HERE MAKE API CALL FOR GETTING THE AUTH TOKEN AND REFRESH TOKEN THEN THIS DATA AND USER DATA WILL BE SAVED TO THE AUTHCONTEXT
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        {/* <!-- email --> */}
        <div className="htmlForm-control">
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: "email is required" })}
            className="auth-input"
            name="email"
            type="email"
            id="email"
          />
          {errors && errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* <!-- password --> */}
        <div className="htmlForm-control">
          <label className="auth-label" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            className="auth-input"
            name="password"
            type="password"
            id="password"
          />
          {errors && errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        {/* handling global errors */}
        <p className="text-red-500">{errors?.root?.random?.message}</p>
        {/* <!-- Submit --> */}
        <button
          className="auth-input my-5 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
