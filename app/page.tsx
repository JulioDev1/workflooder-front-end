import Register from "./Pages/Register";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-between max-w-100% max-h-full">
      <div className="p-1 w-full flex justify-center h-screen">
        <Register />
      </div>
    </main>
  );
}
