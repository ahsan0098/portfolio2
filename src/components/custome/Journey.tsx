
import { Card } from "../ui/card";


interface Experience {
  title: string;
  desc: string;
  company: string;
  period: string;
  link: string
}

interface Exp {
  journey: string;
  desc: string;
  list: { [key: string]: Experience };
}

const Journey = (props: Exp) => {
  return (
    <div className="my-20 space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold text-center">{props.journey}</h2>
        <p className="max-w-3xl text-center">{props.desc}</p>
      </div>

      <Card className="w-full p-28 max-lg:p-10 bg-background flex items-center justify-center gap-10">
        <div className="flex flex-col gap-20 relative">
          {Object.entries(props.list).map(([key, ex], index) => (
            <div
              key={index}
              className="flex items-start gap-10 max-lg:flex-col"
            >
              <Card
                key={index}
                className="bg-background min-w-72 flex justify-center items-center p-5 relative gap-5"
              >
                
                <h3 className="text-lg font-bold">{ex.period}</h3>
                <div className="absolute top-1/2 -translate-y-1/2 -left-[85px] max-sm:-left-[65px] flex items-center z-20 max-lg:hidden">
                  <div className="size-7 rounded-full border-2 bg-background" />
                  <div className="w-10 max-sm:w-5 h-0.5 bg-black" />
                  <div className="size-7 rounded-full border-2 bg-background" />
                </div>
              </Card>
              <div className="flex flex-col gap-2 text-start">
                <h3 className="text-2xl font-bold">
                  {ex.title} - {ex.company}
                </h3>
                <p>{ex.desc}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-16 -left-[70px] max-sm:-left-[50px] bottom-24 w-0.5 bg-black z-10 max-lg:hidden" />
        </div>
      </Card>
    </div>
  );
};

export default Journey;
