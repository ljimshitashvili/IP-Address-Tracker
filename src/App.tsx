import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const [search, setSearch] = useState<object[]>([]);

  return (
    <div className="flex w-full min-h-screen flex-col bg-[url('./assets/pattern-bg-mobile.png')] bg-no-repeat bg-x-center bg-contain">
      <Header />
      <Search setSearch={setSearch} />
    </div>
  );
}
