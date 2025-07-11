import { Globe2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

interface Experience {
  title: string;
  desc: string;
  company: string;
  period: string;
  link: string
}

interface Exp {
  title: string;
  desc: string;
  list: { [key: string]: Experience };
}

const Experiences = (props: Exp) => {
  return (
    <div className="my-20 space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold text-center">{props.title}</h2>
        <p className="max-w-3xl text-center">{props.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-10">
        {Object.entries(props.list).map(([key, ex], index) => (
          <Card
            key={index}
            className="bg-background flex flex-col w-full gap-8 p-8"
          >
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                className="rounded-lg"
                  src={`/public/experiences/${key}.webp`}
                  alt="Avatar"
                  width={64}
                  height={64}
                />
                <p className="font-bold text-xl">{ex.company}</p>
              </div>
              <Button size="icon">
                <Link to={ex.link}>
                  <Globe2 />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg border-2 p-5 text-start">
              <div className="flex flex-col md:flex-row justify-between gap-5 mb-4">
                <p className="font-bold">{ex.title}</p>
                <Badge className="bg-secondary">{ex.period}</Badge>
              </div>
              <p>{ex.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
