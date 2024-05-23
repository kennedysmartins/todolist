"use client";
import React, { useState } from "react";
import TaskSheet from "@/components/TaskSheet";
import * as C from "./styles";

const Home: React.FC = () => {
  return (
    <C.Container>
      <C.Title>Lista de Tarefas</C.Title>
      <TaskSheet />
    </C.Container>
  );
};

export default Home;
