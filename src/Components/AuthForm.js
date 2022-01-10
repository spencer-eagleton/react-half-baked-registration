export default function AuthForm() {
  return (
    <div>
      <form>
        <label>
          Email:
          <input type="text" placeholder="Enter Email"></input>
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter Password"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
