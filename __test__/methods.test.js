let counter = 0;

beforeEach(() => {
  counter++;
});

afterEach(() => {
  counter = 0;
});

describe.skip('counter', () => {
  test('increments after beforeEach', () => {
    expect(counter).toBe(1);
  });

  test('resets after afterEach', () => {
    expect(counter).toBe(1);
  });
});