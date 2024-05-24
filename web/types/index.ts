import { ReactNode } from "react";

export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface TaskValues {
    title: string;
    description?: string;
  }
  
  export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
  }