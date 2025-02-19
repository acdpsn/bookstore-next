import Form from "next/form";

const LoginForm = () => {
  return (
    <Form action="/login">
      <input type="text" name="username" />
      <input type="text" name="password" />
      <button type="submit">Log In</button>
    </Form>
  );
};

export default LoginForm;
