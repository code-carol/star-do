export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
