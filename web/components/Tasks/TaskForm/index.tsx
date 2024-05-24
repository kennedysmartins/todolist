"use client"
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as C from "./styles";
import Modal from "@/components/Modal";
import { TaskValues } from "@/types";

interface TaskFormProps {
  onSubmit: (values: TaskValues, actions: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const initialValues: TaskValues = { title: "", description: "" };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string(),
  });

  const handleSubmit = (values: TaskValues, actions: any) => {
    onSubmit(values, actions);
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <C.Main>
          <C.Button type="button" onClick={openModal}>
            Novo
          </C.Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Form>
              <C.Container>
                <h2>Crie sua tarefa</h2>

                <C.StyledField
                  name="title"
                  type="text"
                  placeholder="Título"
                  autoComplete="off"
                  autoFocus
                />
                <C.TextareaField
                  name="description"
                  placeholder="Descrição"
                  autoComplete="off"
                />

                <C.Button type="submit">Criar</C.Button>
              </C.Container>
            </Form>
          </Modal>
        </C.Main>
      )}
    </Formik>
  );
};

export default TaskForm;
