import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";

function LoginForm() {
  const dispatch = useDispatch();

  const submitNickName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nickName = (e.target as HTMLFormElement).nickName.value;
    dispatch(loginUser(nickName));
  };

  return (
    <div className="container h-100 d-flex justify-content-center ">
      <form
        className="w-50 mt-5 d-flex justify-content-center flex-column"
        onSubmit={(e) => submitNickName(e)}
      >
        <div className="form-group">
          <label htmlFor="nickName" className="mb-2">
            Chat app by Richard Aguilar
          </label>
          <br />
          <label htmlFor="nickName" className="mb-2">
            Type your nickname
          </label>
          <input
            type="text"
            className="form-control"
            id="nickName"
            aria-describedby="nickNameHelp"
            placeholder="This nickname will be used in the chat"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Join to chat
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
