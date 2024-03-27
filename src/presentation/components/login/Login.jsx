export default function Login() {
  return (
    <>
      <div className="container">
        <div className="modal-wrapper">
          <div className="profile-img">
            <div className="profile-add"></div>
          </div>
          <div className="text-wrapper show">
            <div className="nav">
              <div className="login">Login</div>
              <div className="sign-up selected">Sign Up</div>
            </div>
            <form className="full-name">
              <div className="form-title">Full Name</div>
              <input className="content"></input>
            </form>
            <form className="email">
              <div className="form-title">Email</div>
              <input className="content"></input>
            </form>
            <form className="password">
              <div className="security hide">
                <div className="security-type">
                  <div className="security-level">
                    <span className="secureValue"></span>%
                  </div>
                  <div className="secure">secure</div>
                </div>
                <div className="fill circle"></div>
                <div className="cover circle"></div>
                <div className="background circle"></div>
              </div>
              <div className="form-title">Password</div>
              <input type="password" className="content"></input>
            </form>
            <form className="retype">
              <div className="form-title">Retype Password</div>
              <input type="password" className="content"></input>
            </form>
            <div className="button">Submit</div>
            <div className="forget">Forget your password?</div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
