import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
    return (
      <div>
        <h1>Hello, This is Parent Component</h1>
        <Child1 />
        <Child2 />
      </div>
    );
}

export default Parent;