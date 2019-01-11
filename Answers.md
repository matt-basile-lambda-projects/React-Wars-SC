# Answers

1.  What is React JS and what problems does it try and solve?
        ReactJS is a UI component Library created by Facebook that was design to help solve some of the major issues the team was facing regarding complex state. They were dealing with massive amount of data but in continually bogged down their DOM so they created Reactjs to combat that issue. 
1.  What does it mean to _think_ in react?
        Thinking in react means two things to me. One it means to begin breaking down your UI design into components. In breaking down into components we are facilitating the strengths of Reactjs as well as creating a more structure and reusable system. The second part which is a product of thinking in components, is understanding where our state should exist and how we'll need to pass it via props. 
1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
        A stateful component is a component that will hold state for us. It'll act as the "heart" so to speak in that our other components will rely on it as our data hub. It is a class component specifically so that it can store our state. A functional/Presentational component receives it's data from a stateful component but can exist with out a class component. At it's core it is just a UI component that is capable of receiving data but ultimately will just act as styling on our page. 
1.  Describe state.
        State is the data that our components can hold onto and pass to other components. Another way to think about it is the data we have stored in our application that we are trying to display to all our users in a UI.
1.  Describe props.
        Props are how we pass state from one component to another. They are the "blood" of our application but are immutable, meaning tho we reference them from component to component the only way we can update them is in our stateful components via the setState method. 
