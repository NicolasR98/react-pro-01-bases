import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterWithReducer } from './counter-reducer/CounterWithReducer';

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />

      <Counter />
      <CounterBy incrementValue={2} />
      <CounterEffect />
      <CounterHook />
      <CounterWithReducer />
    </>
  );
}

export default App;
