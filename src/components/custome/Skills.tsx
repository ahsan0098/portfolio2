

import { Card } from "../ui/card";


const skills = [
    {
        label: "PHP",
        icon: "https://skillicons.dev/icons?i=php",
    },
    {
        label: "Laravel",
        icon: "https://skillicons.dev/icons?i=laravel",
    },
    {
        label: "Livewire",
        icon: "https://skillicons.dev/icons?i=linkedin",
    },
    {
        label: "Node",
        icon: "https://skillicons.dev/icons?i=nodejs",
    },
];

interface Skills{
    title: string,
    desc: string
}
const Skills = (props:Skills) => {
   

    return (
        <div className="my-20">
            <div className="w-full flex flex-col justify-center items-center gap-5">

                <h2 className="text-4xl font-bold">{props.title}</h2>
                <p className="max-w-4xl text-center">{props.desc}</p>
                
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-sm font-semibold border-2 rounded-lg p-2 shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    >
                        <div className="rounded-lg border">
                            <img src={skill.icon} alt="" className="h-8 w-8 " />
                        </div>
                        <p>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Skills