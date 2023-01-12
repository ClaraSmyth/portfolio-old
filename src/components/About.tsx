function About() {
  return (
    <div className="grid h-[100dvh] grid-cols-2 items-center justify-items-center gap-4">
      <div className="max-w-sm">
        <p className="text-4xl font-bold">About Me</p>
        <p>
          I am a highly motivated self-taught web developer with a passion for creating responsive and user-friendly
          webpages. I am constantly learning and excited to continue honing my skills and growing as a developer.
        </p>
      </div>
      <div>
        <p className="text-4xl font-bold">Skills</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
      </div>
    </div>
  );
}

export default About;
