import { Card } from "@nextui-org/react";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectsCard({ title, description, labels = [], link = '#', img }) {
    return (
        <Card className="text-default-900 body-font rounded-md">
            <div className="container mx-auto flex flex-wrap h-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                    <img className="w-full" src={img} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-start gap-2 font-bold text-xl mb-2">
                            <a href={link} target="_blank">
                                {title}
                            </a>
                            <a href={link} target="_blank">
                                <BiLinkExternal />
                            </a>
                        </div>
                        <p className="text-default-900 text-base text-start">
                            {description}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        {labels.map(l => (
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-default-900 mr-2">{l}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
