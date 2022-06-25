import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="font-Rubik font-light text-2xl sm:text-7xl flex">
        <div className="animate-pulse mx-2 font-bold">50</div> Projects in
        <div className="animate-bounce mx-2 font-bold">50</div> Days
      </div>
      <div className="font-Karla font-light text-lg sm:text-xl pt-10">
        <ul className="list-decimal flex space-x-10">
          <li>
            <Link href="/expanding-cards">Expanding Cards</Link>
          </li>
          <li>
            <Link href="/progress-steps">Progress Steps</Link>
          </li>
          <li>
            <Link href="/rotating-navigation">Rotating Navigation</Link>
          </li>
          <li>
            <Link href="/hidden-search">Hidden Search</Link>
          </li>
          <li>
            <Link href="/blurry-loading">Blurry Loading</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
