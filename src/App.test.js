import React from "react";
import { getByText, render } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { episodesFixture } from "./components/Episodes.test";

import { mockData } from "./data/mockData";

jest.mock("./api/fetchShow");
mockFetchShow.mockResolvedValue(mockData);
// console.log('App.test.js: mockFetchShow', mockFetchShow);

test("App renders", () => {
  render(<App />);
});

// test('App fetches episodes data and renders the data', async () => {

//   mockFetchShow.mockResolvedValueOnce({data: episodesFixture})

//   render(<App />)

//   /*
//   const { getByText, queryAllByTestId } = render(<App />);
//   const button = getByText(/get data/i);
//   fireEvent.click(button);

//   getByText(/we are fetching data/i); //this was changed to a timeout in lecture

//   await wait();

//   expect(queryAllById('episode')).toHaveLength(1);

//   */

// })
