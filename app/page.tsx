import Image from "next/image";
import Landing from "./components/landing";
import Demo from "./components/demo";
import Why from "./components/why";
import Flow from "./components/client/flow-diagram";

function NavBar() {
  return (
    <div className="flex flex-col items-center bg-black shadow-2xl rounded-full w-11/12 mt-3 fixed z-20">
      <Image
        src="/banner.svg"
        alt="banner"
        width={300}
        height={75}
        priority
      />
    </div>
  );
}

function Page() {
  return (
    <div>
      <Landing />
      <Flow />
      <Demo />
      <Why />
    </div>
  );
}

export default function Home() {
  return (
    <main className="main_body flex flex-col w-screen bg-white dark:bg-gray-800 items-center">
      <Page />
      <NavBar />
    </main>
  );
}
