import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            S. M. Hasnat Fardin
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#research" className="hover:text-blue-600 transition">
              Research
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 px-6"
      >
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="text-blue-600 font-medium mb-3">
              Hello, I&apos;m
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
              S. M. Hasnat Fardin
            </h2>

            <h3 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
              AI/ML Research Enthusiast
              <span className="text-blue-600"> • </span>
              Full-Stack Developer
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
              Computer Science and Engineering student at BRAC University
              with interests in AI/ML research and Full-Stack Web Development.
              I enjoy building intelligent systems, developing modern web
              applications, and exploring interpretable machine learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
              >
                View Projects
              </a>

              <a
                href="#research"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                View Research
              </a>
              <a
                href="/cv/Hasnat_Fardin_CV.pdf"
                download
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-gray-50 transition"
              >
                Download CV
              </a>


            </div>

            <div className="flex gap-6 mt-8 text-sm text-gray-600">
              <a
                href="https://github.com/Fardin808"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/s-m-hasnat-fardin-674665286/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:hasnat.fardin.sami@gmail.com"
                className="hover:text-blue-600 transition"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right Side - Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Soft outer ring */}
              <div className="absolute -inset-4 rounded-full bg-blue-50"></div>

              {/* Image */}
              <div className="relative w-72 h-72 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="S. M. Hasnat Fardin"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-md rounded-full px-5 py-2 whitespace-nowrap">
                <p className="text-sm font-medium text-gray-700">
                  CSE @ BRAC University
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


    {/* About Section */}
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">Get to know me</p>

          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* About Text */}
          <div className="md:col-span-2">
            <p className="text-gray-600 text-lg leading-8">
              I&apos;m passionate about both{" "}
              <span className="font-semibold text-gray-900">
                full-stack development
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900">
                machine learning
              </span>
              . I&apos;ve built web applications using the MERN stack and
              Next.js, alongside research-driven AI projects, including an
              interpretable EEG-based emotion recognition system for my
              undergraduate thesis.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              I enjoy exploring diverse areas, from AI music generation to
              embedded systems and IoT, while learning new technologies and
              applying them to real-world problems. My goal is to continue
              growing as a developer and ML practitioner while working on
              projects that bring both sides of my skill set together.
            </p>
          </div>

          {/* Quick Info */}
          <div className="border-l-2 border-gray-200 pl-7">
            <div className="mb-6">
              <p className="text-sm text-gray-500">University</p>
              <p className="font-semibold text-gray-900">
                BRAC University
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500">Degree</p>
              <p className="font-semibold text-gray-900">
                B.Sc. in Computer Science & Engineering
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500">Primary Interests</p>
              <p className="font-semibold text-gray-900">
                AI/ML Research & Full-Stack Development
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Based in</p>
              <p className="font-semibold text-gray-900">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>
      </div>
    </section> 

    {/* Research / Thesis Section */}
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">
            Research
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Undergraduate Thesis
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
          <p className="text-sm font-medium text-blue-600 mb-3">
            Undergraduate Thesis · Team Project
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
            An Interpretable KAN-Guided SNN Architecture with
            Channel-Wise Contribution Tracking for EEG-Based
            Emotion Recognition
          </h3>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            Developed an interpretable EEG-based emotion recognition
            framework using a Spiking Neural Network (SNN) backbone
            and a Kolmogorov-Arnold Network (KAN) readout. The model
            classifies four emotional states from the DER-VREEG dataset
            while providing channel-wise contribution analysis for
            improved interpretability.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Python",
              "PyTorch",
              "SNN",
              "KAN",
              "EEG",
              "Deep Learning",
              "Signal Processing",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-2">
                Dataset
              </p>
              <p className="font-semibold text-gray-900">
                DER-VREEG
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-2">
                Emotion Classes
              </p>
              <p className="font-semibold text-gray-900">
                Happy · Calm · Scared · Bored
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-2">
                Focus
              </p>
              <p className="font-semibold text-gray-900">
                Interpretable EEG Emotion Recognition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Featured Projects */}
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* AI Music Generation */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              AI / Deep Learning
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Multi-Genre AI Music Generation
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Built a symbolic music generation framework using LSTM,
              VAE, Transformer Decoders, and reinforcement learning
              from human feedback.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Python", "PyTorch", "LSTM", "VAE", "Transformer", "RLHF"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Farmer Connect */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              Full-Stack Development
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Farmer Connect
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Developed the frontend and backend of the wholesaler
              operations module in a MERN-based agricultural marketplace,
              including produce discovery, purchasing, transport coordination,
              and order tracking.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "JWT"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Smart Service Mart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              Full-Stack Development
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Service Mart
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Built assigned frontend and backend modules for a service
              marketplace featuring booking management, email notifications,
              complaint handling, and smart service-provider recommendations.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "JavaScript", "Prisma", "NoSQL", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Robotic Arm */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              Embedded Systems / Robotics
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Remotely Controlled Robotic Arm
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Developed ESP32-based glove-side control software for a
              gesture-controlled robotic arm with wireless communication
              and multiple sensors.
            </p>

            <div className="flex flex-wrap gap-2">
              {["ESP32", "Arduino", "NRF24L01", "Sensors"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Dam Control */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              IoT / Embedded Systems
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dual Authorization-Based Dam Control
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Built a smart dam control prototype using dual Arduino Uno
              boards, I2C communication, environmental sensors, servo motors,
              and water pumps.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Arduino", "I2C", "Embedded C/C++", "Sensors"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Amazing Psychopath */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium mb-2">
              Computer Graphics
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Amazing Psychopath
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
              Contributed animated text effects, dynamic sky effects,
              and a blood-trail rendering system to a team-built 3D
              OpenGL game.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Python", "OpenGL", "PyOpenGL", "GLUT"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Technical Skills */}
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Technical Skills
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Programming Languages */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Programming Languages
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Java",
                "JavaScript",
                "PHP",
                "C",
                "C++",
                "SQL",
                "8086 Assembly",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "PHP",
                "REST APIs",
                "JWT Authentication",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Databases
            </h3>

            <div className="flex flex-wrap gap-2">
              {["MongoDB", "MySQL", "Database Design"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI / ML */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI / Machine Learning
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "Machine Learning",
                "Deep Learning",
                "SNN",
                "KAN",
                "LSTM",
                "Transformers",
                "VAE",
                "RLHF",
                "EEG Signal Processing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "GitHub",
                "Prisma",
                "Vercel",
                "XAMPP",
                "Arduino IDE",
                "emu8086",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* Certifications */}
    <section id="certifications" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">
            Learning & Credentials
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Certifications
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Coursera Certificate */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
            <p className="text-sm text-blue-600 font-medium mb-2">
              DeepLearning.AI & Stanford University
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Supervised Machine Learning: Regression and Classification
            </h3>

            <p className="text-gray-600 mb-4">
              Coursera · February 2025
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              Completed coursework covering core supervised learning concepts,
              including regression, classification, model training, and evaluation.
            </p>

            <a
              href="https://coursera.org/verify/SS52BXSBUCJV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              View Credential →
            </a>
          </div>

          {/* BRAC Web Development */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
            <p className="text-sm text-blue-600 font-medium mb-2">
              BRAC University
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Web Development
            </h3>

            <p className="text-gray-600 mb-4">
              Short Course
            </p>

            <p className="text-gray-600 leading-7">
              Completed hands-on training in web development fundamentals,
              strengthening practical knowledge of building and structuring modern
              web applications.
            </p>
          </div>

        </div>
      </div>
    </section> 


    {/* Education */}
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">
            Academic Background
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Education
          </h2>

          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-2xl p-7 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Bachelor of Science in Computer Science and Engineering
                </h3>
                <p className="text-gray-600 mt-1">
                  BRAC University
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  CGPA: 3.82
                </p>                
              </div>

              <p className="text-sm text-gray-500">
                2022 – Present
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-7 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-gray-600 mt-1">
                  Murari Chand College
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  GPA: 5.00
                </p>
              </div>

              <p className="text-sm text-gray-500">
                2021
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-7 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-gray-600 mt-1">
                  Cantonment Public School and College, Saidpur
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  GPA: 5.00
                </p>
              </div>

              <p className="text-sm text-gray-500">
                2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Contact */}
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-blue-600 font-medium mb-2">
          Let&apos;s Connect
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-5">
          Get In Touch
        </h2>

        <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto mb-10">
          I&apos;m interested in opportunities related to full-stack development,
          artificial intelligence, machine learning, and research. Feel free to
          reach out if you&apos;d like to collaborate, discuss a project, or connect.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:hasnat.fardin.sami@gmail.com"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/s-m-hasnat-fardin-674665286/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Fardin808"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white transition"
          >
            GitHub
          </a>
        </div>

        <div className="text-gray-500 text-sm space-y-2">
          <p>Dhaka, Bangladesh</p>
          <p>hasnat.fardin.sami@gmail.com</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-gray-200 bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          © 2026 S. M. Hasnat Fardin. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/Fardin808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/s-m-hasnat-fardin-674665286/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>    

    </main>
  );
}