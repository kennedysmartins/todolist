import * as React from 'react'
import TaskForm from '../TaskForm';

const TaskSheet: React.FC = () => {
    const [tasks, setTasks] = React.useState<string[]>([]);
    const addTask = (values: { task: string }, { resetForm }: any) => {
        setTasks([...tasks, values.task]);
        resetForm();
      };
  return (
    <>
    <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <TaskForm onSubmit={addTask} />

    </>
  )
}

export default TaskSheet