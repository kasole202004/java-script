npx create-react-app sql-query-project
cd sql-query-project
npm start
src/
|-- components/
|   |-- Query1.js
|   |-- Query2.js
|   |-- Query3.js
|   |-- Query4.js
|   |-- Query5.js
|   |-- Query6.js
|   |-- Query7.js
|   |-- Query8.js
|   |-- Query9.js
|   |-- Query10.js
|   |-- Query11.js
|   `-- Query12.js
|-- App.js
`-- index.js
// src/components/Query1.js
import React from 'react';

const Query1 = () => {
  // Mock data simulating SQL query result
  const productNames = ['Apple iPhone', 'Apple MacBook', 'Apple Watch'];

  return (
    <div>
      <h3>Products containing 'Apple':</h3>
      <ul>
        {productNames.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Query1;
// src/App.js
import React from 'react';
import Query1 from './components/Query1';
import Query2 from './components/Query2';
import Query3 from './components/Query3';
import Query4 from './components/Query4';
import Query5 from './components/Query5';
import Query6 from './components/Query6';
import Query7 from './components/Query7';
import Query8 from './components/Query8';
import Query9 from './components/Query9';
import Query10 from './components/Query10';
import Query11 from './components/Query11';
import Query12 from './components/Query12';

const App = () => {
  return (
    <div>
      <h1>SQL Query Results</h1>
      <Query1 />
      <Query2 />
      <Query3 />
      <Query4 />
      <Query5 />
      <Query6 />
      <Query7 />
      <Query8 />
      <Query9 />
      <Query10 />
      <Query11 />
      <Query12 />
    </div>
  );
};

export default App;