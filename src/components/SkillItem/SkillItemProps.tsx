import { HtmlHTMLAttributes, ReactNode } from 'react';

export type SkillItemProps = HtmlHTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  percent: number;
  title: string;
};
