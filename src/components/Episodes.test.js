import React from "react";
import { render, waitFor } from "@testing-library/react";
import Episodes from "./Episodes";

export const episodesFixture = [
  {
    id: "id",
    image: "imageSrc",
  },
];

test("Episodes renders", () => {
  render(<Episodes episodes={[]} />);
});

test("Episodes shows data when rerendered with new episodes prop", async () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);

  await waitFor(() => {
    rerender(<Episodes episodes={episodesFixture} />);

    expect(queryAllByTestId("episode")).toHaveLength(1);
  });
});
