import Hero from "@/components/custome/Hero";
import Education from "@/components/custome/Eduction";
import Skills from "@/components/custome/Skills";
import Projects from "@/components/custome/Projects";
import AboutSection from "@/components/custome/AboutSection";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/custome/Header";
import MaxWidthWrapperNavbar from "@/components/custome/MaxWidthWrapperNavbar";
import Experiences from "@/components/custome/Experiances";
import Footer from "@/components/custome/Footer";


const Home = () => {

    const { data } = useLang();

    return (
        <>
            <Header {...data.general} links={data.links} />
            <MaxWidthWrapperNavbar className="flex flex-col justify-center items-center gap-5 px-4 md:px-8 lg:px-12">
                <div className="my-20">

                    <Hero {...data.general} />
                    <AboutSection {...data.aboutsection} />
                    <Education {...data.education} />
                    <Skills {...data.skills} />
                    <Experiences {...data.experience} />
                    <Projects {...data.projects} />
                </div>

            </MaxWidthWrapperNavbar>
            <Footer {...data.general} links={data.links} />
        </>

    )
}

export default Home