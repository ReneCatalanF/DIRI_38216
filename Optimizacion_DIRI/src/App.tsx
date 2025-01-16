import { FC, memo, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const ItemList: FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
//const MemoizedItemList = memo(ItemList);
const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  
  const [items, _setItems] = useState<string[]>(
    Array.from({ length: 1000 }, (_, i) => `Item ${i}`)
  );

  /*
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => `Item ${i}`)
  });*/
  return (
    <div>
      <h1>Profiling en React</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button>
      <ItemList items={items} />
      
    </div>
  );
};

export default App
