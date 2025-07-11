import React, { createContext, useContext, useEffect, useState } from "react";

type LangType = "en" | "ar";

type LangData = any;

interface LangContextType {
    lang: LangType;
    setLang: (lang: LangType) => void;
    data: LangData | null;
}

const LangContext = createContext<LangContextType | null>(null);

const langUrls: Record<LangType, string> = {
    en: "https://raw.githubusercontent.com/ahsan0098/portfolio2/main/src/constants/lang/en.json",
    ar: "https://raw.githubusercontent.com/ahsan0098/portfolio2/main/src/constants/lang/ar.json",
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<LangType>(() => {
        return (localStorage.getItem("lang") as LangType) || "en";
    });
    const [data, setData] = useState<LangData | null>(null);

    useEffect(() => {
        localStorage.setItem("lang", lang);

        async function loadLang() {
            try {
                const res = await fetch(langUrls[lang]);
                const jsonData = await res.json();
                setData(jsonData);
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
            } catch (err) {
                console.error("Failed to load lang data:", err);
            }
        }

        loadLang();
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
