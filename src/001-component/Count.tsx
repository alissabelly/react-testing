import * as React from 'react';

export default function Count(): React.ReactElement {
  const [count, setCount] = React.useState(0);

  const event = (type: 'DECREASE' | 'INCREASE') => () => {
    if (type === 'DECREASE') {
      setCount((c) => --c);
    } else {
      setCount((c) => ++c);
    }
  };

  return (
    <div>
      <label data-testid="count-label">Count : {count}</label>
      <button onClick={event('INCREASE')} data-testid="button-increase">
        Increase
      </button>
      <button onClick={event('DECREASE')} data-testid="button-decrease">
        Decrease
      </button>
    </div>
  );
}
