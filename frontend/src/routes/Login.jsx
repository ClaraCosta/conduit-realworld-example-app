import { useState } from "react";
import AuthPageContainer from "../components/AuthPageContainer";
import LoginForm from "../components/LoginForm";

function Login() {
  const [errorMessage, setErrorMessage] = useState();

  const handleError = (error) => {
    setErrorMessage(error);
  };

  return (
    <AuthPageContainer
      error={"O login falhou! Tente novamente, ou crie uma nova conta!"}
      path="/register"
      text="Precisa de uma nova conta??"
      title="Sign in"
    >
      <LoginForm onError={handleError} />
    </AuthPageContainer>
  );
}

export default Login;
