import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "GlobeOx Oxygen and Nitrogen Gas Plant",
    description:
      "The GlobeOx Plant -floor is spread over 6000 sq. ft. covered area including good mechanical workshop with well-equipped machineries, like TIG Argon Arc welding(several numbers), Silver Brazing, Pressure testing, DPT, Electro-polishing, Testing equipment like Helium Leak, Detector, Vacuum unit etc. We have young experienced team of people to execute the job in the field. Shanti Industries is reputed for manufacture of spares for air separation units . It also engages in Erection & commissioning of oxygen plants. The company has the following list of equipment and machinery to cater to wide range of customers and ensuring timely delivery with best of the quality of the finished product.",
    image: "/og.jpg",
    github: "",
    link: "",
  },
  {
    name: "Manufacture and Distribution of Plant Spares",
    description: "GlobeOx also works in the manufacturing & distribution of all types of spares of Oxygen, D.A & Nitrous Oxide plants.Manufacture & export of all types of spares for Oxygen gas plant, Acetylene & Nitro Oxide plant to M/S Shanghi Organisation, M/S Sanghi Gases Pvt.Ltd, KVK Corporation all over India, African countries & the Middle East.GlobeOx is a SSI registered corporation which is involved in maintenance of cryogenic storage and transport equipment, Oxygen and Nitrogen Gas plant. The organization is well known name in manufacturing spare parts for air separation unit and perforated metal sheet. Presently the reigns of the company are under the dynamic proprietorship of Mr. Navin Monteiro. With his multifaceted creative vision ,he has taken the company to greater heights. Mr.Navin is a Mechanical Engineer by education and able administrator.",
    image: "/mech.png",
    github: "",
    link: "",
  },
  {
    name: "Cryogenic Storage and Transport",
    description:
      "Every Year approximately 500 new Cryogenic liquid storage and transport tanks are introduced into the mainstream use. But the old ones need refurbishment on regular basis. With this far- sightedness in mind, the enterprises have ventured into this new line of business. The establishment has taken a foot forward to provide spare parts and accessories required for Cryogenic liquid storage vessels. The necessary setup is at Mankoli, situated on Nashik Highway, on the outskirts of Thane district. The company has all the required machinery, expertise and manpower for delivering the best service. For those on-site operations, the company delivers the goods with a well-equipped mobile service van to offer on-site maintenance.",
    image: "/cr.jpg",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
