import { useState } from "react";
import { Header, Search, Result, MapComponent } from "./components";
import { Types } from "./types";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Types | null>(null);

  return (
    <div className="bg-[url('./assets/pattern-bg-mobile.png')] flex w-full min-h-screen flex-col bg-no-repeat bg-x-center bg-contain px-6">
      <Header />
      <Search setSearch={setSearch} />
      <Result search={search} setResult={setResult} result={result} />
      <MapComponent />
    </div>
  );
}
