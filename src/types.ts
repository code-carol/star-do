export type TaskType = {
  id: string;
  title: string;
  createdAt: Date;
  completed: boolean;
  completedAt: Date | null;
};

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
