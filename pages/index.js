import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="font-Rubik font-light text-2xl sm:text-7xl">
        <span className="animate-bounce mx-2 font-bold">50</span> Projects in{" "}
        <span className="animate-bounce mx-2 font-bold">50</span> Days
      </div>
      <div className="font-Karla font-light text-lg sm:text-xl pt-10">
        <ul className="list-disc">
          <li>
            <Link href="/expanding-cards">Expanding Cards</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
