import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { FaGitSquare, FaGithubSquare, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman, SiMongodb, SiRabbitmq } from "react-icons/si";

const Technologies = () => {
  return (
    <section className="px-6 py-10" id="skills">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Technologies
      </h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">

        <div className="p-4 flex flex-col items-center">
          <RiReactjsLine className="text-6xl text-cyan-400" />
          <p>React JS</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <RiTailwindCssFill className="text-6xl text-blue-600" />
          <p>Tailwind CSS</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <TiHtml5 className="text-6xl text-orange-600" />
          <p>HTML 5</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <BiLogoPostgresql className="text-6xl text-blue-950" />
          <p>PostgreSQL</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <FaNode className="text-6xl text-green-600" />
          <p>Node JS</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <FaGitSquare className="text-6xl text-orange-600" />
          <p>Git</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <FaGithubSquare className="text-6xl" />
          <p>GitHub</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <IoLogoJavascript className="text-6xl text-yellow-600" />
          <p>JavaScript</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <TbBrandCpp className="text-6xl text-blue-950" />
          <p>C++</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <SiPostman className="text-6xl text-orange-600" />
          <p>Postman</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <SiMongodb className="text-6xl text-green-700" />
          <p>MongoDB</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <SiRabbitmq className="text-6xl text-orange-500" />
          <p>RabbitMQ</p>
        </div>

        <div className="p-4 flex flex-col items-center">
          <FaDocker className="text-6xl text-blue-500" />
          <p>Docker</p>
        </div>

      </div>
    </section>
  );
};

export default Technologies;
