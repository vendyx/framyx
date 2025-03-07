import { FC, PropsWithChildren } from 'react';

import './button.css';

export const Button: FC<Props> = ({ children }) => {
  return <button className="vendyx__button">{children}</button>;
};

type Props = PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;
