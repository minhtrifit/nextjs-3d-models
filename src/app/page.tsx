import SuitCanvas from "@/components/SuitCanvas";

export default function Home() {
  return (
    <section className="min-h-screen max-w-screen bg-black flex">
      <div className="w-[100vw] max-h-screen overflow-y-auto text-white text-xl p-4">
        HELLO
      </div>
      <SuitCanvas />
    </section>
  );
}
