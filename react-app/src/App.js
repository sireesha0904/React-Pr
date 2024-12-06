import MyButton from "./Youtube";
const user = {
  name: "UserName",
  age: 20,
  email: "user@example.com",

};

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <h1>hello</h1>
      <MyButton />
      <h2>User Info</h2>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>

    </>
  );
}

export default App;
