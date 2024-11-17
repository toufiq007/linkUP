import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formdata) => {
    const user = { ...formdata };

    // HERE MAKE API CALL FOR GETTING THE AUTH TOKEN AND REFRESH TOKEN THEN THIS DATA AND USER DATA WILL BE SAVED TO THE AUTHCONTEXT

    setAuth({ user });
    navigate("/");
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
