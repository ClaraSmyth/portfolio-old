function Home() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="flex justify-between px-6 py-2">
        <p>Home</p>
        <p>Contact</p>
      </header>
      <div className="flex flex-1 flex-col justify-center leading-none">
        <p className="text-[4vw]">Hi.</p>
        <p className="ml-4 text-[6vw]">Im Clara.</p>
        <p className="ml-8 text-[10vw]">Web Developer.</p>
      </div>
    </div>
  );
}

export default Home;
