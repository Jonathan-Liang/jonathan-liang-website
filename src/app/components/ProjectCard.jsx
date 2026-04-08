import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
return (
    <Link href={previewUrl}>
        <div className="rounded-xl border border-nord-3 overflow-hidden hover:border-nord-8 transform transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm shadow-nord-0">
            <div
                className="h-52 md:h-72 relative"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
            </div>
            <div className="text-nord-6 bg-nord-1 py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-nord-4">{description}</p>
            </div>
        </div>
    </Link>
);
};

export default ProjectCard;