import { FC } from "react";
interface ButtonProps {
  to: string;
}
export const Button: FC<ButtonProps> = ({ to }) => {
  return (
    <>
      <a className="link" href={to} target="blank">
        <button className="custom_button">послушать</button>
      </a>
    </>
  );
};
