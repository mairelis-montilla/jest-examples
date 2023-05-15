describe('basic examples', ()=> {

  it('passes when value is null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('passes when value is true', () => {
    const n = true;
    expect(n).toBeTruthy();
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeFalsy();
  });

  test('passes when value is false', () => {
    const n = false;
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });

})

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  test('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  test('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});
