import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

const useInput = <T = any>(
  initialData: T,
): [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
