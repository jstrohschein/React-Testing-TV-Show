import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';


export const episodesFixture = [
  {
    id: 'id',
    image: 'imageSrc'
  }
]


test('Episodes renders', () => {
  render(<Episodes episodes={[]}/>);
})

test('Episodes shows data when rerendered with new episodes prop', () => {

  const { queryAllByTestId, rerender } = render(<Episodes episodes={ [] } />);

  expect(queryAllByTestId('episode')).toStrictEqual([]);
  expect(queryAllByTestId('episode')).toHaveLength(0);

  rerender(<Episodes episodes={ episodesFixture } />);

  expect(queryAllByTestId('episode')).toHaveLength(1);

})







