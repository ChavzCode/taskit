function TodoCounter({ completed, total }) {
  return (
    <div className="ctn-counter">
      <h2>
        You have completed {completed} of {total} tasks!
      </h2>
    </div>
  );
}
export default TodoCounter;
