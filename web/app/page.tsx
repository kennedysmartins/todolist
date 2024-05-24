"use client";
import React, { useState } from "react";
import * as C from "./styles";
import { TaskSheet } from "@/components/Tasks";


const Home: React.FC = () => {
  return (
    <C.Container>
      <C.Title>Lista de Tarefas</C.Title>
      <TaskSheet />
    </C.Container>
  );
};

export default Home;
