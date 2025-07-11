import {
    BookCopy,
    BookOpen,
    GraduationCap,

} from "lucide-react";

import { Card, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface Degree {
    title: string,
    desc: string,
    program: string,
    institute: string,
    period: string,
    marks: string
}

interface Edu {
    title: string,
    desc: string,
    degrees: { [key: string]: Degree }
}

const Education = (props: Edu) => {
    const icons = {
        metric: BookOpen,
        intermediate: BookCopy,
        bachelors: GraduationCap
    };

    return (
        <div className="space-y-16 my-20">
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <h2 className="text-4xl font-bold">{props.title}</h2>
                <p className="max-w-2xl text-center">{props.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Object.entries(props.degrees).map(([key, degree], index) => {
                    const Icon = icons[key as keyof typeof icons];

                    return (
                        <Card
                            key={index}
                            className="relative bg-background border-2 border-muted rounded-xl shadow-md p-6 h-auto flex flex-col gap-4"
                        >
                            {/* Icon */}
                            {Icon && (
                                <div className="absolute -top-6 left-6 bg-blue-100 border-2 border-blue-300 rounded-lg w-14 h-14 flex items-center justify-center shadow">
                                    <Icon className="w-6 h-6 text-blue-800" />
                                </div>
                            )}

                            {/* Degree Program */}
                            <CardTitle className="pt-8 text-xl font-bold">{degree.program}</CardTitle>

                            {/* Description */}
                            <CardDescription className="text-sm text-muted-foreground">
                                <p className="font-bold text-start text-base text-foreground">
                                    {degree.institute}
                                </p>
                                <p className="mb-2 text-justify">{degree.desc}</p>
                                
                            </CardDescription>

                            {/* Footer badges */}
                            <div className="flex items-center justify-between gap-4 mt-auto">
                                <Badge variant="outline" className="text-xs px-3 py-1">
                                    {degree.period}
                                </Badge>
                                <Badge variant="outline" className="text-xs px-3 py-1">
                                    {degree.marks}
                                </Badge>
                            </div>
                        </Card>

                    );
                })}
            </div>
        </div>
    );
};
export default Education