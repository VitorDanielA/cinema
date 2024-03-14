import Navbar from "./components/Navbar";
import Carrousel from "./components/Carrousel"

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar/>
      <Carrousel/>
      <div className="mt-7 flex items-center justify-center gap-4">
        <p className="sessao"></p>
        <p className="sessao"></p>
        <p className="sessao"></p>
      </div>
    </main>
  );
}
