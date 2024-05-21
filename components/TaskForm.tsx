// components/TaskForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface TaskFormProps {
  onSubmit: (values: TaskValues, actions: any) => void;
}

interface TaskValues {
  task: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const initialValues: TaskValues = { task: '' };

  const validationSchema = Yup.object({
    task: Yup.string().required('Task is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <Field name="task" type="text" placeholder="Enter task" />
            <ErrorMessage name="task" component="div" />
          </div>
          <button type="submit">Adicionar Task</button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
