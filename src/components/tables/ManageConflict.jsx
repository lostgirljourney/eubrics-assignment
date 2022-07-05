import DisplayTodo from '../utilities/DisplayTodo';
import CreateTodoForm from '../utilities/CreateTodoForm';

const ManageConflict = ({ path }) => {
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

export default ManageConflict;
