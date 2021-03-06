import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useClickAway} from '..';
import {useRef} from 'react';
import ShowDocs from '../util/ShowDocs';

const Demo = () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    alert('OUTSIDE CLICKED');
  });

  return (
    <div ref={ref} style={{
      width: 200,
      height: 200,
      background: 'red',
    }} />
  );
};

storiesOf('UI|useClickAway', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useClickAway.md')} />)
  .add('Demo', () =>
    <Demo/>
  )
