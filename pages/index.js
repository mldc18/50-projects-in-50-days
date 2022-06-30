import Link from "next/link";
import projects from "../definitions/projects";

export default function Home() {
  const projectLinks = projects.map((project) => (
    <li className="">
      <Link href={project.url} passHref>
        <a className="text-sm whitespace-nowrap">{project.text}</a>
      </Link>
    </li>
  ));
  return (
    <div className="flex flex-col h-screen items-center justify-center overflow-hidden">
      <div className="font-Rubik font-light text-2xl sm:text-5xl md:text-7xl flex px-8">
        <div className="animate-pulse mx-2 font-bold">50</div> Projects in
        <div className="animate-bounce mx-2 font-bold">50</div> Days
      </div>
      <div className="font-Karla font-light pt-10 px-40 ">
        <ul className="list-decimal grid grid-cols-1 lg:grid-cols-5 lg:gap-x-14 text-sm sm:text-xl">
          {projectLinks}
        </ul>
      </div>
    </div>
  );
}
