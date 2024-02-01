### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? React is a front-end framework for JavaScript development. One reason to use React is the library's ultimately optimized development interface and coding language.

- What is Babel? Babel operates as a transpiler, converting the latest JavaScript syntax into a version that can run in all environments.

- What is JSX? JSX is a syntax extension to JavaScript and produces "elements".

- How is a Component created in React? A component is created as a JavaScript function.

- What are some difference between state and props? The main difference between props and state is that the props are a way to pass the data or properties from one componenet to other componenets while the state is the real-time data available to use within that only component. Props are a way to pass data from a parent componenet to a child component in React. Props are immutable, thus cannot be changed. State represents the internal state of a component. It's an object that stores data that can be changed within the component.

- What does "downward data flow" refer to in React? Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component? A controlled components are those in which form's data is handled by the component's state.

- What is an uncontrolled component? Uncontrolled components are the components that are not controlled by the React state and are handled by the DOM.

- What is the purpose of the `key` prop when rendering a list of components? The `key` prop is a unique identified that React uses to efficiently manage and update elements within a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Using array indices as `keys` can cause problem when the list is updated. If elements are added or remove, the indices of the remaining elements can change, leading to incorrect updates. Instead, using a unique identifier that does not change (i.e. database ID), would be the proper way to use a `key` prop.

- Describe useEffect. What use cases is it used for in React components? the `Effect Hook` allows the developer to perform side effects in function components, such as state features. Several use cases including fetching API data, validating input fields, updating a paragraph list on fetched API data update.

- What does useRef do? Does a change to a ref value cause a rerender of a component? useRef is a react hook that lets you reference a value that's not needed for rendering.

- When would you use a ref? When wouldn't you use one? The most common use cae for a ref is to access a DOM element.

- What is a custom hook in React? When would you want to write one? A custom hook is a reusable function that a developer can use to add special or unique functionality within the React application. You may use custom hooks when multiple hooks will be used throughout the code. The use of custom hooks makes code more readable and cleaner.
