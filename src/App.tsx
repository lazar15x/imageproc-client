import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  div: {
    color: 'rgb(60,60,60)',
    display: 'flex',
    fontSize: 16,
    lineHeight: 1.5,
    userSelect: 'none',
  },
});

function App() {
  return (
    <>
      <div {...stylex.props(styles.div)}>hello</div>
    </>
  );
}

export default App;
