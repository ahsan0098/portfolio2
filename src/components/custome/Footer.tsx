import React from "react";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";
import { Button } from "../ui/button";
import type { General } from "./Header";
import { LOGO_URL } from "@/constants/paths";
import contacts from "./../../constants/contacts"


const Footer: React.FC<General> = (props) => {
    return (
        <MaxWidthWrapperNavbar className="flex flex-col gap-3">
            <div className="border-3 rounded-lg p-5 space-y-10">
                <div className="flex items-start max-md:flex-col gap-10">
                    <div className="space-y-5">
                        <div className="flex items-center gap-2">
                            <img
                                src={LOGO_URL}
                                alt={props.name}
                                className="h-12 w-12"
                            />
                            <p className="max-sm:text-xs font-bold">{props.name}</p>
                        </div>

                        <div className="flex flex-col gap-3 text-start">
                            <div className="flex items-center gap-2">
                                <div className="border-2 p-2 rounded-lg bg-blue-300">
                                    <contacts.email.icon size={18} />
                                </div>
                                <p>{contacts.email.val}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="border-2 p-2 rounded-lg bg-blue-300">
                                    <contacts.phone.icon size={18} />
                                </div>
                                <p>{contacts.phone.val}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="border-2 p-2 rounded-lg bg-blue-300">
                                    <contacts.location.icon size={18} />
                                </div>
                                <p>{contacts.location.val}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="text-justify text-muted-foreground w-full">
                            {props.bio}
                        </p>
                        <div className="text-start mt-5">
                            <p className="max-sm:text-xs font-bold mb-4">Social Links</p>
                            <div className="flex gap-4 md:gap-6 lg:gap-10 items-baseline">
                                {
                                    contacts.social.map((sc, ind) => {
                                        
                                        return (
                                            <Button key={ind} size="icon" className="bg-secondary">
                                                {sc.logo}
                                            </Button>
                                        );
                                    })
                                }


                            </div>
                        </div>

                    </div>
                </div>
                <div className="h-0.5 w-full bg-muted-foreground border-y-2" />
                <div className="flex items-center justify-between gap-2 md:gap-5 w-full">


                    {props.links.map((pg, index) => (
                        <div key={index} className="hover:underline cursor-pointer flex gap-4 px-4 md:px-8 ">
                            <h3 className="font-semibold text-lg">{pg.title}</h3>
                        </div>
                    ))}


                </div>
                <div className="h-0.5 w-full bg-muted-foreground border-y-2" />

                <div className="h-0.5 w-full bg-muted-foreground" />
                <p className="text-center text-muted-foreground pb-5 max-sm:text-xs mb-0">
                    Copyright © 2025 {props.name}.
                </p>
            </div>
        </MaxWidthWrapperNavbar>
    );
};

export default Footer;
