import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./../constants/lang/en";
import ar from "./../constants/lang/ar";

type LangType = "en" | "ar";

type LangData = typeof en;

interface LangContextType {
    lang: LangType;
    setLang: (lang: LangType) => void;
    data: LangData;
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<LangType>(() => {
        return (localStorage.getItem("lang") as LangType) || "en";
    });

    const [data, setData] = useState<LangData>(lang === "ar" ? ar : en);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        setData(lang === "ar" ? ar : en);

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
