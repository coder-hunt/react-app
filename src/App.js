import React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Greet } from './components/Greet';
import { Welcome } from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from "./components/StyleSheet";
import Inline from './components/Inline';
import './components/appStyle.css'
import style from './components/appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Heros from './components/Heros';
import ErrorBoundry from './components/ErrorBoundry';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import CounterTwo from './components/CounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';

// import { Hello } from './components/Hello';
// import { Messages } from './components/Messages';

function App() {
  return (
    <div className="App">
      <HookCounter />
      {/* <PostList /> */}
      {/* <UserProvider value = 'CodeMyMobile'>
        <ComponentC />
      </UserProvider> */}

      <CounterTwo >
        {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterTwo>
      {/* <CounterTwo>
        {(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterTwo> */}
      {/* <CounterTwo  render = {(count, incrementCount) => <ClickCounterTwo count = {count} incrementCount = {incrementCount}/>}/>
      <CounterTwo  render = {(count, incrementCount) => <HoverCounterTwo count = {count} incrementCount = {incrementCount}/>}/>
      <HoverCounter name = 'Pushpendra Kumar' countValue = '1000' />
      <ClickCounter name = 'Himanshu' countValue = '1000'/> */}
      {/* <ErrorBoundry>
        <Heros heroName='SuperMan' />
      </ErrorBoundry>
      <ErrorBoundry>
        <Heros heroName='Batman' />
      </ErrorBoundry> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {style.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet  primary = {true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind  name = "Pushpendra Kumr"/> */}
      {/* <Counter /> */}
      {/* <Messages /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Greet name = "Clark!"  heroName = "superman"/>
      <Welcome name = "Diana" heroName = "batman" /> */}

      {/* <Greet name = "Diana!"  heroName = "batman">
        <p> This is children props</p>
      </Greet>
      <Greet name = "Mark!"   heroName = "shaktiman"/>
      <Welcome name = "Clark" heroName = "Superman" />
      <Welcome name = "Mark" heroName = "Shaktiman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
