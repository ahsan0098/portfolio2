import { Button } from "../ui/button";

interface Hr {
  name: string
  bio: string
  resume: string
  contact: string
}

export const Hero = (props: Hr) => {
  console.log(props);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

      <div className="w-full max-w-sm lg:max-w-md relative mx-auto">
        <img
          src="/profile.png"
          alt="Hero"
          
          className="w-full h-[80vh] border-8 border-blue-400 rounded-lg"
        />
        <div className="absolute inset-[3px] border-2 rounded-lg"></div>

        <div className="size-4 border-2 bg-background rounded-full absolute -top-1 -left-1"></div>
        <div className="size-4 border-2 bg-background rounded-full absolute -top-1 -right-1"></div>
        <div className="size-4 border-2 bg-background rounded-full absolute -bottom-1 -left-1"></div>
        <div className="size-4 border-2 bg-background rounded-full absolute -bottom-1 -right-1"></div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="text-center lg:text-left max-w-xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {props.name}
          </h1>
          <p className="text-muted-foreground text-lg text-justify">
            {props.bio}
          </p>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <Button className="px-6 py-3 text-lg">{props.resume}</Button>
            <Button className="px-6 py-3 text-lg bg-secondary">
              {props.contact}
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero