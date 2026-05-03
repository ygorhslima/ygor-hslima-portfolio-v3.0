import { Menu } from "lucide-react";
import "./style.css";

interface Props {
  onClick: () => void;
}
export default function MenuHamburguer({ onClick }: Props) {
  return (
    <div onClick={onClick} className="MenuHamburguer">
      <Menu />
    </div>
  );
}
