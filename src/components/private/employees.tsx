import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Tools = {
    general: string;
    mailAgenda: string;
    nextcloud: string;
    github: string;
    lucca: string;
    slack: string;
    taleez: string;
};

type Employee = {
    organigram: string;
    benefits: string;
    workAgreements: string;
    office: string;
    cybersecurity: string;
    tools: Tools;
    graphicCharter: string;
    reviewsAndSeminars: string;
    travelPolicy: string;
    recruitment: string;
};

type EmployeeApiResponse = {
    data: {
        id: number;
        attributes: Employee;
        meta: any;
    };
};

export default function EmployeesPageContent({
    page,
    subpage,
    locale = "en",
}: {
    page: string;
    subpage?: string;
    locale?: "en" | "fr";
}): JSX.Element {
    const [content, setContent] = useState<string>(null);

    useEffect(() => {
        const baseUrl = "http://localhost:1337/api/employee";
        const field = `fields[0]=${page}`;
        const subfield = subpage ? "&populate=*" : "";
        axios
            .get<EmployeeApiResponse>(
                `${baseUrl}?${field}${subfield}&locale=${locale}`
            )
            .then((response) => {
                const res = response.data.data.attributes;
                setContent(subpage ? res[page][subpage] : res[page]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {content && (
                <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
            )}
        </>
    );
}
