"use client"
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as C from "./styles";
import { fetchTaskByID } from "@/lib/api";

interface TaskFormProps {
  id: string;
  onSubmit: (values: TaskValues, actions: any) => void;
}

interface TaskValues {
  title: string;
  description?: string;
}

const TaskFormEdit: React.FC<TaskFormProps> = ({ id, onSubmit }) => {
  const [initialValues, setInitialValues] = useState<TaskValues>({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const data = await fetchTaskByID(id);
        if (data) {
          setInitialValues({
            title: data.title,
            description: data.description || "",
          });
        }
      } catch (error) {
        console.error("Erro ao buscar os dados da tarefa:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTaskData();
  }, [id]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Título é obrigatório"),
    description: Yup.string(),
  });

  const handleSubmit = (values: TaskValues, actions: any) => {
    onSubmit(values, actions);
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <C.Container>
            <h2>Edite sua tarefa</h2>
            <C.StyledField
              name="title"
              type="text"
              placeholder="Título"
              autoComplete="off"
              autoFocus
            />
            <C.StyledField
              name="description"
              placeholder="Descrição"
              autoComplete="off"
            />
            <C.Button type="submit">Editar</C.Button>
          </C.Container>
        </Form>
      )}
    </Formik>
  );
};

export default TaskFormEdit;
