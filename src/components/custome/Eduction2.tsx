import { Card } from "../ui/card";

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
    deg: string,
    prog: string,
    inst: string,
    dur: string,
    mrk: string,
    degrees: { [key: string]: Degree }
}

const Education2 = (props: Edu) => {
   
    return (
        <div className="space-y-16 my-20">
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <h2 className="text-4xl font-bold">{props.title}</h2>
                <p className="max-w-2xl text-center">{props.desc}</p>
            </div>

            <Card className="p-8 bg-background">
                <div className="border-2 rounded-lg overflow-hidden">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left bg-blue-300 border-b-2">
                                    <th className="text-center p-5 border-r-2 whitespace-nowrap">
                                        {props.prog}
                                    </th>
                                    <th className="text-center p-5 border-r-2 whitespace-nowrap">
                                        {props.deg}
                                    </th>
                                    <th className="text-center p-5 border-r-2 whitespace-nowrap">
                                        {props.inst}
                                    </th>
                                    <th className="text-center p-5 border-r-2 whitespace-nowrap">
                                        {props.dur}
                                    </th>
                                    <th className="p-5 whitespace-nowrap">
                                        {props.mrk}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(props.degrees).map(([key, degr], index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td
                                            className={`p-5 border-r-2 ${index !== Object.entries(props.degrees).length - 1 ? "border-b-2" : ""
                                                }`}
                                        >
                                            {degr.program}
                                        </td>
                                        <td
                                            className={`p-5 border-r-2 ${index !== Object.entries(props.degrees).length - 1 ? "border-b-2" : ""
                                                }`}
                                        >
                                            {degr.title}
                                        </td>
                                        <td
                                            className={`p-5 border-r-2 ${index !== Object.entries(props.degrees).length - 1 ? "border-b-2" : ""
                                                }`}
                                        >
                                            {degr.institute}
                                        </td>
                                        <td
                                            className={`p-5 border-r-2 ${index !== Object.entries(props.degrees).length - 1 ? "border-b-2" : ""
                                                }`}
                                        >
                                            {degr.period}
                                        </td>
                                        <td
                                            className={`p-5 ${index !== Object.entries(props.degrees).length - 1 ? "border-b-2" : ""
                                                }`}
                                        >
                                            {degr.marks}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </div>
    );
};
export default Education2