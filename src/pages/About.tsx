import AboutSection from "@/components/custome/AboutSection";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/custome/Header";
import MaxWidthWrapperNavbar from "@/components/custome/MaxWidthWrapperNavbar";
import Footer from "@/components/custome/Footer";
import Journey from "@/components/custome/Journey";
import Education from "@/components/custome/Eduction";


const About = () => {

    const { data } = useLang();

    return (
        <>
            <Header {...data.general} links={data.links} />
            <MaxWidthWrapperNavbar className="flex flex-col justify-center items-center gap-5 px-4 md:px-8 lg:px-12">
                <div className="">

                    <AboutSection {...data.aboutsection} />
                    <Education {...data.education} />
                    <Journey {...data.experience} />
                </div>

            </MaxWidthWrapperNavbar>
            <Footer {...data.general} links={data.links} />
        </>

    )
}

export default About