import { useState } from "react";
import { Header, Search, Result } from "./components";
import { Types } from "./types";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Types | null>(null);

  return (
    <div className="flex w-full min-h-screen flex-col bg-[url('./assets/pattern-bg-mobile.png')] bg-no-repeat bg-x-center bg-contain px-6">
      <Header />
      <Search setSearch={setSearch} />
      <Result search={search} setResult={setResult} result={result} />
    </div>
  );
}
