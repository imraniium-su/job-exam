What is the key prop in React? Why is it important to include a key prop when rendering an array of components?
Ans: The key prop in React is used to uniquely identify elements in a list of components during rendering. It is essential to include a key prop to help React efficiently update the virtual DOM and improve performance when reordering or adding/removing items from the array of components.
How would you pass all of the proper:es of an object as props to a child component in React? What is the spread operator (...) used for in this context?
Ans: In React, can pass all properties of an object as props to a child component using the spread operator (...). To achieve this, you would simply spread the object within the JSX when rendering the child component, like so: <ChildComponent {...obj} />. The spread operator in this context effectively spreads all the key-value pairs of the object as individual props to the child component, allowing access to its properties within the child component.
How would you define a User component that displays the name and age proper:es of a user object passed as props?
Ans: const User = ({ user }) => <div>{user.name}, {user.age} years old</div>;
This component takes a user object as props and directly accesses the name and age properties from the user object to display them within a div element.
How would you render the User component within the map() func:on in the App component to display each user object in the array?
Ans: const App = () => {
  const users = [...]; // array of user objects
  return (
    <div>
      {users.map((user, index) => <User key={index} user={user} />)}
    </div>
  );
};
This code will render the User component for each user object in the users array, passing each user object as props with a unique key provided for efficient rendering.
How would you use the fetch() funcYon in JavaScript to make a GET request to an API and retrieve data?
Ans: fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
• What is the purpose of the component DidMount() or useEffect() in React? How can you use it to trigger a fetch request when the component is loaded?
Ans: The purpose of componentDidMount()or useEffect() in React is to perform side effects like data fetching, subscriptions, or manually interacting with the DOM after the component has been rendered.

To trigger a fetch request when the component is loaded,  use componentDidMount() in class components or useEffect() with an empty dependency array in functional components, ensuring the effect runs only once when the component.

• How would you use the setState() funcYon in React to set the data retrieved from the API in the component's state?
Ans: To use the setState() function in React to set the data retrieved from the API into the component's state
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  // ... rest of the component code using the "data" state
};

• How would you handle any errors that occur during the fetch process, such as a network error or a failure to retrieve data from the API?
Ans: To handle errors that occur during the fetch process, use the .catch() method in the fetch request, or use a try-catch block in the async/await syntax.
