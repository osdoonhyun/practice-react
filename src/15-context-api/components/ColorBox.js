import ColorContext, { ColorConsumer } from '../color';

export default function ColorBox() {
  return (
    <ColorConsumer>
      {/* {(value) => ( */}
      {(
        { state } // 객체 비구조화 할당 문법 사용
      ) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subColor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
}

// export default function ColorBox() {
//   return (
//     <ColorContext.Consumer>
//       {(value) => (
//         <div
//           style={{
//             width: '64px',
//             height: '64px',
//             background: value.color,
//           }}
//         />
//       )}
//     </ColorContext.Consumer>
//   );
// }
