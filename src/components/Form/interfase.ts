import { ReactNode } from 'react';

export interface FormProps {
  children: ReactNode;
  title: string;
  textLink: string;
  link: string;
  actionButton: () => void;
  textButton: string;
  type: "button" | "submit" | "reset";
}