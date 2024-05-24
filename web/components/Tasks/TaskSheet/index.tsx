"use client";
import React from "react";
import Modal from "@/components/Modal";
import {TaskForm, TaskFormEdit, TaskItem} from "@/components/Tasks";
import { useTasks } from "@/hooks/useTasks";
import * as C from "./styles";

const TaskSheet: React.FC = () => {
  const {
    tasks,
    isModalOpen,
    editingTaskId,
    openModal,
    closeModal,
    addTask,
    deleteTask,
    toggleCompleted,
    editTaskSubmit,
  } = useTasks();

  return (
    <>
      <TaskForm
        onSubmit={(values, { resetForm }) => {
          addTask(values.title, values.description ?? "");
          resetForm();
        }}
      />

      <C.List>
        {tasks.length === 0 ? (
          <p>Crie sua primeira tarefa 📋</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              deleteTask={() => deleteTask(task.id)}
              toggleCompleted={() => toggleCompleted(task.id)}
              editTask={() => openModal(task.id)}
            />
          ))
        )}
      </C.List>
      {editingTaskId && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TaskFormEdit id={editingTaskId} onSubmit={editTaskSubmit} />
        </Modal>
      )}
    </>
  );
};

export default TaskSheet;
