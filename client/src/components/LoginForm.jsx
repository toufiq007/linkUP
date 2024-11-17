const LoginForm = () => {
  return (
    <>
      <htmlForm className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
        {/* <!-- email --> */}
        <div className="htmlForm-control">
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input className="auth-input" name="email" type="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div className="htmlForm-control">
          <label className="auth-label" htmlFor="email">
            Password
          </label>
          <input
            className="auth-input"
            name="password"
            type="password"
            id="password"
          />
        </div>
        {/* <!-- Submit --> */}
        <button
          className="auth-input my-5 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </htmlForm>
    </>
  );
};

export default LoginForm;
