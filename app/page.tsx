import Image from "next/image";
import Link from "next/link";

import UserInput from "./components/UserInput";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/chatbot">To Chatbot Page</Link>
      <br />
      <Link href="/content">To Content Showcase Page</Link>

      <br />
      <br />

      <div>
        <UserInput />
      </div>
    </main>
  );
}
