import React from "react";
import "./App.css";
import Header, { CompassDirection } from "./Header";

function App() {
  const title = "Web 3";
  const { firstName, lastName } = {
    firstName: "David",
    lastName: "Breckx",
  };
  const anotherVariable = "Een andere variabele";
  let anotherVar: number;
  anotherVar = 25;
  anotherVar = "Dit is nu een string";

  const anotherFn = () => {};

  const arr = [
    { id: 1, title: "Web1", ects: 3 },
    { id: 2, title: "Web2", ects: 6 },
    { id: 3, title: "Web3", ects: 6 },
  ];

  return (
    // React Fragment
    <>
      {arr.map((e) => {
        return (
          <React.Fragment key={e.id}>
            <p>{e.title}</p>
            <p>{e.ects} SP</p>
          </React.Fragment>
        );
      })}
      <Header
        title={title}
        isDone={true}
        count={10}
        anotherNumb={6}
        status="new"
        direction={CompassDirection.SOUTH}
        // updateFn={anotherFn}
      />

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
