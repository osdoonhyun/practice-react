import { useCallback, useState } from 'react';

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  const onClick = useCallback(() => {
    onInsert(value);
    setValue('');
  }, [onInsert, value]);

  return (
    <>
      {/* submit 이벤트 */}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='할 일을 입력하세요'
          value={value}
          onChange={onChange}
        />
        <button type='submit'>추가</button>
      </form>

      {/* onClick 이벤트 */}
      <form>
        <input
          type='text'
          placeholder='할 일을 입력하세요'
          value={value}
          onChange={onChange}
        />
        <button onClick={onClick}>추가</button>
      </form>
    </>
  );
}
