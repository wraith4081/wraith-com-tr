import React, { createContext, useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

const Context = createContext(undefined as any);

export const MainProvider = ({ children }: { children: JSX.Element }) => {

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("isDarkMode") === "true"
        || (!("isDarkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        || false
    );

    useEffect(() => {
        const value = (isDarkMode || false).toString();

        if (!['true', 'false'].includes(value)) {
            localStorage.removeItem("isDarkMode");
        } else {
            localStorage.setItem("isDarkMode", value);
        }

        document.body.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const [user, setUser] = useState(false);
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("https://wraith.com.tr/data.json").then(async res => {
            if (res.ok) {
                const data = await res.json();
                setContent(data);
            } else {
                toast.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
            }
        })
    }, [])

    const data = {
        user,
        setUser,
        isDarkMode,
        setIsDarkMode,
        content,
    };


    return <Context.Provider value={data}>{children}</Context.Provider>
}

export const useMain = () => useContext(Context) as {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    content: null | {
        "projects": {
            "logo": string,
            "name": string,
            "url": string,
        }[],
        "socials": {
            "discord": string,
            "instagram": string,
            "twitter": string
        }
    };
}