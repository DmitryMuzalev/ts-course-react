import React from "react";

export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoForm {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
