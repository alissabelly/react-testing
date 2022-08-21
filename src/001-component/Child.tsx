import * as React from 'react';

interface ChildProps {
  name: string;
}

export default function Child({ name }: ChildProps): React.ReactElement {
  return (
    <li data-testid={`item`}>
      <label>{name}</label>
    </li>
  );
}
