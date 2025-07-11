import React, { createContext, useContext, useEffect, useState } from "react";

type LangType = "en" | "ar";


interface LangContextType {
    lang: LangType;
    setLang: (lang: LangType) => void;
    data: any;
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<LangType>(() => {
        return (localStorage.getItem("lang") as LangType) || "en";
    });

    const [data, setData] = useState<any>({});

    useEffect(() => {
        localStorage.setItem("lang", lang);

        const loadLang = async () => {
            const response = await fetch(
                `https://raw.githubusercontent.com/ahsan0098/portfolio2/main/src/constants/lang/en.ts`
            );
            const text = await response.text();
            const module = eval(text); // Use cautiously or parse JSON if it’s JSON
            setData(module);
        };

        loadLang();
        // Set direction and language on the HTML tag
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang, data }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within LangProvider");
    return ctx;
};
