import { useLang } from "@/contexts/LangContext";
import Header from "@/components/custome/Header";
import MaxWidthWrapperNavbar from "@/components/custome/MaxWidthWrapperNavbar";
import Footer from "@/components/custome/Footer";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";



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

const Projects = () => {
    const { data } = useLang();
    const props = data.projects
    return (
        <>
            <Header {...data.general} links={data.links} />
            <MaxWidthWrapperNavbar className="flex flex-col justify-center items-center gap-5 px-4 md:px-8 lg:px-12">
                <div className="my-20 space-y-16">
                    <div className="w-full flex flex-col justify-center items-center gap-5">
                        <h2 className="text-4xl font-bold text-center">{props.title}</h2>
                        <p className="max-w-3xl text-center">{props.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-16">
                        {Object.entries(props.list).map(([key, project], index) => (
                            <Card key={index} className="flex flex-col bg-background p-8 relative  mt-28">
                                <div className="mb-6 -mt-28">
                                    <Carousel className="">
                                        <CarouselContent className="">
                                            {project.images.split(',').map((image, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center items-center"
                                                >
                                                    <img
                                                        src={image}
                                                        alt="Gallery"
                                                        height={250}
                                                        width={250}
                                                        className="object-cover rounded-[10px] border"
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                    </Carousel>
                                </div>

                                <div className="space-y-5 mt-5">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>


            </MaxWidthWrapperNavbar>
            <Footer {...data.general} links={data.links} />
        </>

    );
};

export default Projects