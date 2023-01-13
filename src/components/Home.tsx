function Home() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="fixed flex w-[100dvw] justify-between px-2 py-2">
        <p>Home</p>
        <p>Contact</p>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center leading-none">
        <div>
          <p className="text-[3vw]">Hi.</p>
          <p className="-ml-[5%] text-[6vw]">Im Clara.</p>
          <p className="text-[12vw]">Web Developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
