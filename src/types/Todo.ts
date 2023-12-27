import React from "react";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoForm {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ITodoItem extends ITodo {
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
