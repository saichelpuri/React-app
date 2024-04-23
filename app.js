const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i'm from react nesting"),
    React.createElement("h2", {}, "i'm from react nesting"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm from react nesting"),
    React.createElement("h2", {}, "i'm from react nesting"),
  ]),
]);
console.log(parent);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello I'm from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
