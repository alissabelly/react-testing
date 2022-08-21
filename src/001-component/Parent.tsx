import * as React from 'react';
import Child from './Child';
import Count from './Count';

export default function Parent(): React.ReactElement {
  const items = ['test1', 'test2'];
  return (
    <div>
      <Count />
      <ul>
        {items.map((name) => {
          return <Child key={name} name={name} />;
        })}
      </ul>
    </div>
  );
}
