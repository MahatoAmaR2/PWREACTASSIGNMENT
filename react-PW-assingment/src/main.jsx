import React from 'react'
import ReactDOM from 'react-dom/client'
// import Person from './component/assingment1/Question1.jsx'
// import Button from './component/assingment1/Question2.jsx'
// import Header from './component/assingment1/Question3.jsx'
// import List from './component/assingment1/Question4.jsx'
//  import Changeform from './component/assingment2/instaoginandSignup/Changeform'
  import Counter from './component/assingment2/counter/Counter'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Person name="BauAA" age="18" />
  <Button text="Click me!" onClick={()=> console.log("Button clicked")} />
  <Header title="Welcome to my website!" />
  <List items={['apple', 'banana', 'orange']} /> */}
  {/* <Changeform /> */}
  <Counter />
  </React.StrictMode>,
)
