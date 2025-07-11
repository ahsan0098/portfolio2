import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Project {
  title: string;
  desc: string;
  tec: string;
  images: string;
  live?: string;
}

interface Proj {
  title: string;
  desc: string;
  list: { [key: string]: Project };
  to_all: string;
  nextbtn: string;
}

const Projects = (props: Proj) => {
  return (
    <div className="mt-20 space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold text-center">{props.title}</h2>
        <p className="max-w-3xl text-center">{props.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {Object.entries(props.list).map(([key, project], index) => (
          <Card
            key={index}
            className="bg-background flex flex-col justify-center items-start gap-10 p-8"
          >
            <h3 className="text-2xl font-bold text-center w-full">
              {project.title}
            </h3>
            <div
              className="w-full border-t-2 border-black relative"
              style={{
                borderTopStyle: "dashed",
                borderTopWidth: "2px",
                borderImage:
                  "repeating-linear-gradient(to right, black, black 10px, transparent 10px, transparent 20px) 1",
              }}
            >
              <div className="size-6 rounded-full bg-background border-2 absolute left-0 -top-3"></div>
              <div className="size-6 rounded-full bg-background border-2 absolute right-0 -top-3"></div>
            </div>

            <div className="flex items-center justify-between gap-1 mx-auto mt-auto">
              {project.tec.split(',').map((t: string, ind: number) => (
                <Badge key={ind} className="bg-blue-300 text-xs px-3 py-1">
                  {t.trim()}
                </Badge>
              ))}
            </div>
            <p className="text-start">
              {project.desc.substring(0, 110)}...
            </p>
            <Button className="bg-secondary text-secondary w-full text-background flex items-center gap-3">
              {props.nextbtn}
              <ArrowRight />
            </Button>
          </Card>
        ))}
      </div>
      <div className="w-full border-2 rounded-lg h-10 bg-blue-300 flex justify-center items-center gap-3 overflow-hidden p-0 cursor-pointer">
        <img
          src="/public/Abstract.webp"
          alt="Abstract_logo"
          width={50}
          height={50}
          className="mb-7"
        />
        <p className="max-sm:text-xs">{props.to_all}</p>
        <ArrowRight className="" />
        <img
          src="/public/Abstract.webp"
          alt="Abstract_logo"
          width={30}
          height={30}
          className="mt-7"
        />
      </div>
    </div>
  );
};

export default Projects;
