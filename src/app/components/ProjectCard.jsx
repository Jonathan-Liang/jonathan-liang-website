import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
return (
    <Link href={previewUrl}>
        <div className="rounded-xl border border-[#33353F] overflow-hidden hover:border-primary-500 transform transition-all duration-300 hover:scale-105 cursor-pointer">
            <div
                className="h-52 md:h-72 relative"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
            </div>
            <div className="text-white bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    </Link>
);
};

export default ProjectCard;