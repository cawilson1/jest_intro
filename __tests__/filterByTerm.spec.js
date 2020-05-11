function filterByTermOrId(arr, str, id) {
  if (str.length === 0 && id === undefined) return [];
  const regex = new RegExp(str, "i");
  return arr.filter(
    el => (str.length !== 0 && el.url.match(regex)) || el.id === id
  );
}

describe("Filter function", () => {
  it("should filter by a search term (link)", () => {
    //actual test to run
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
    const output = [
      { id: 2, url: "https://www.url2.dev" },
      {
        id: 3,
        url: "https://www.link3.dev"
      }
    ];
    const emptyStringOutput = [];
    const urlOutput = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];
    const url1Output = [{ id: 1, url: "https://www.url1.dev" }];
    const url2Output = [{ id: 2, url: "https://www.url2.dev" }];
    const url3Output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTermOrId(input, "link", 2)).toEqual(output);
    expect(filterByTermOrId(input, "LINK", 2)).toEqual(output);
    expect(filterByTermOrId(input, "LINK", 3)).toEqual(url3Output);
    expect(filterByTermOrId(input, "")).toEqual(emptyStringOutput);
    expect(filterByTermOrId(input, "", 3)).toEqual(url3Output);
    expect(filterByTermOrId(input, "uRl", 1)).toEqual(urlOutput);
    expect(filterByTermOrId(input, "rl2", 2)).toEqual(url2Output);
    expect(filterByTermOrId(input, "thsobfsdfi", 1)).toEqual(url1Output);
    expect(filterByTermOrId(input, "thsobfsdfi")).toEqual(emptyStringOutput);
    expect(filterByTermOrId(input, "thsobfsdfi", 4)).toEqual(emptyStringOutput);
  });
});
