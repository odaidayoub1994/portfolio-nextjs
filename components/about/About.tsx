import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <p className="py-2 text-gray-600">
            🚀 Hello there! I'm an enthusiastic Full Stack Web Developer who
            thrives on crafting exceptional web and mobile applications using
            cutting-edge technologies. With a strong command over Node.js,
            Nest.js, React.js, Redux, Next.js, and Ethers.js with Web3
            integration, I bring over 3 years of hands-on experience to the
            table.
          </p>
          <p className="py-2 text-gray-600">
            💻 My expertise spans both the front-end and back-end realms,
            allowing me to build robust and scalable applications from end to
            end. Whether it's developing server-side logic with Node.js and
            Nest.js or creating captivating user interfaces with React.js and
            Redux, I ensure seamless integration and an unparalleled user
            experience.
          </p>
          <p className="py-2 text-gray-600">
            🚀 Blockchain technology has always fascinated me, and I've honed my
            skills in integrating Ethers.js with Web3 to enable seamless
            interaction with decentralized applications. This expertise opens up
            exciting possibilities for creating secure and transparent solutions
            that leverage the power of blockchain.
          </p>
          <p className="py-2 text-gray-600">
            🤝 Collaboration and teamwork are essential to my approach. I thrive
            in cross-functional environments, working closely with designers,
            product managers, and stakeholders to transform ideas into
            functional and visually stunning applications. Together, we deliver
            results that exceed expectations.
          </p>
          <p className="py-2 text-gray-600">
            🔑 When I'm not coding, you can find me exploring the latest
            advancements in web development, contributing to open-source
            projects, and participating in tech competitions. I have a passion
            for continuous learning, and I'm always eager to expand my knowledge
            and stay ahead of the curve.
          </p>
          <p className="py-2 text-gray-600">
            📩 I'd love to connect with fellow professionals, discuss exciting
            projects, or explore new opportunities. Feel free to reach out to me
            at mailto:odaidayoob88@gmail.com, and let's embark on an exciting
            journey of innovation and growth together.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/./image.JPEG" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
