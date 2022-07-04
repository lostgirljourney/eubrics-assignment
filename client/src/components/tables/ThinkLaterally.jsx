import DisplayTodo from '../utilities/DisplayTodo';
import CreateTodoForm from '../utilities/CreateTodoForm';

const ThinkLaterally = ({ path }) => {
  return (
    <>
      <CreateTodoForm
        placeholder={'add your todo...'}
        todoVal={''}
        path={path}
      />
      <DisplayTodo path={path} />
    </>
  );
};

export default ThinkLaterally;
