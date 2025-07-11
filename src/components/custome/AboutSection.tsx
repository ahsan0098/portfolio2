import { Badge, Clock, LocateIcon, Mail, Phone } from "lucide-react";
import { Card } from "../ui/card";
import contacts from "./../../constants/contacts"

interface Abt {
    title: string
    desc: string
}

const AboutSection = (props: Abt) => {

    return (
        <Card className="my-20 text-start relative w-full flex items-center justify-around bg-background p-8 py-20 gap-10 max-lg:flex-col max-lg:py-12">
            <img
                src="/public/about.svg"
                alt="Hero-icon"
                width={100}
                height={100}
                className="absolute top-0 left-0 max-lg:hidden"
            />
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 space-y-5">
                    <Badge className="">Who I am</Badge>
                    <h2 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: props.title }}>   
                    </h2>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 space-y-5">
                    <p className="text-justify">
                        {props.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div
                            className="flex items-center gap-3 text-sm font-semibold border-2 rounded-lg p-2"
                        >
                            <div className="p-2 rounded-lg border-2 bg-blue-300">
                                <contacts.email.icon size={20} />
                            </div>
                            <p>{contacts.email.val}</p>
                        </div>

                        <div
                            className="flex items-center gap-5 text-sm font-semibold border-2 rounded-lg p-2"
                        >
                            <div className="p-2 rounded-lg border-2 bg-blue-300">
                                <contacts.phone.icon size={20} />
                            </div>
                            <p>{contacts.phone.val}</p>
                        </div>

                    </div>
                </div>
            </div>

        </Card>
    );
};

export default AboutSection