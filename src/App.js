import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: 'Wreet',
    university: 'BUET',
    cgpa: 3.13,
  };
  let style = {
    backgroundImage: 'linear-gradient(45deg, cyan, blue)'
  };
  const libraries = ['Angular', 'Vue', 'React Native', 'React'];
  const products = [{ name: 'Photoshop', price: '$99.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'Acrobat Reader', price: '$79.99' },
  { name: 'Premier Pro', price: '$199.99' }];
  const friends = [
    { name: 'Mridul Ghosh', university: 'MIST' },
    { name: 'Shishir Roy', university: 'BUET' },
    { name: 'Pritam Saha', university: 'RUET' },
    { name: 'Partho Chowdhury', university: 'NITR' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        {
          friends.map(friend => <Friends name={friend}></Friends>)
        }

        {/* <ul>
          {
            libraries.map(library => <li>{library}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul> */}
        {/* <p style={{ backgroundColor: 'cyan', color: 'blue' }}>This is my edited line</p>
        <h2 style={style}>My name is: {person.name} and I am studying in {person.university}</h2> */}
        {
          products.map(product => <Product name={product}></Product>)
        }
        {/* <Product name={products[0]}></Product>
        <Product name={products[1]}></Product>
        <Product name={products[2]}></Product> */}
        <Person name={libraries[0]}></Person>
        <Person name={libraries[2]}></Person>
        <Person name={libraries[1]}></Person>
      </header>
    </div >
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, []);
  // console.log(users);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Friends(props) {
  const style = {
    border: '2px solid gray',
    borderRadius: '15px',
    height: '300px',
    backgroundImage: 'linear-gradient(45deg, cyan, blue)'
  }
  const { name, university } = props.name;
  return (
    <div style={style}>
      <h2>{name}</h2>
      <h4>{university}</h4>
    </div>
  );
}


function Product(props) {
  const productStyle = {
    border: '1px solid grey',
    borderRadius: '15px',
    backgroundColor: 'lightgrey',
    height: '300ox',
    width: '300px',
    float: 'left'
  };

  const { name, price } = props.name;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  );
}


function Person(props) {
  return (
    <div style={{ border: '1px solid cyan', borderRadius: '20px' }}>
      <h2>Name: {props.name} Boss</h2>
      <p>Next Framework: Angular</p>
    </div>
  );
}

export default App;
