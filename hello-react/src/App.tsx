import "./App.css";

function App() {
  const title = "Mobile";
  const { firstName, lastName } = {
    firstName: "David",
    lastName: "Breckx",
  };
  const anotherVariable = "Een andere variabele";
  let anotherVar: number;
  anotherVar = 25;
  anotherVar = "Dit is nu een string";
  return (
    // React Fragment
    <>
      <h1 className="title">{title}</h1>
      <p>
        {`${firstName} ${lastName}`}
        {firstName} {lastName}
      </p>
      <p>{anotherVar}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet a?
        Porro architecto quidem fugit eius laboriosam quas quia ducimus sequi
        delectus corporis! Voluptatibus cupiditate a sequi dolore enim
        blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
        repudiandae aperiam inventore aliquid? Quasi quae pariatur aut officiis
        odit molestias eum at rerum numquam ipsum. Sunt esse qui temporibus
        aliquid.
      </p>
    </>
  );
}

export default App;
