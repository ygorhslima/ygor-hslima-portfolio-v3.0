import "./style.css";
import { PAGES } from "../../core/constants/pages";
import Link from "next/link";

import {
  Brain,
  BrickWall,
  GraduationCap,
  House,
  NewspaperIcon,
  PersonStanding,
} from "lucide-react";

interface Props {
  isOpen: boolean;
}

export default function SideBar({ isOpen }: Props) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Link href={PAGES.HOME} className="link">
        <House />
        <p>Home</p>
      </Link>

      <Link
        href={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.SOBRE}`}
        className="link"
      >
        <PersonStanding />
        <p>Sobre mim</p>
      </Link>

      <Link
        href={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.SKILLS}`}
        className="link"
      >
        <Brain />
        <p>Skills</p>
      </Link>

      <Link
        href={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.FORMACAO}`}
        className="link"
      >
        <GraduationCap />
        <p>Formação</p>
      </Link>

      <Link
        href={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.PROJETOS}`}
        className="link"
      >
        <BrickWall />
        <p>Projetos</p>
      </Link>

      <Link href={PAGES.BLOG} className="link">
        <NewspaperIcon />
        <p>Blog</p>
      </Link>
    </div>
  );
}
