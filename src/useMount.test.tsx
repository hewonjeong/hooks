import useMount from './useMount';
import { renderHook } from '@testing-library/react-hooks';

describe('useMount', () => {
  test('function calls', () => {
    const fn = jest.fn();
    renderHook(() => useMount(fn));

    expect(fn).toBeCalledTimes(1);
  });
});
