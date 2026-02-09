import Link from"next/link";

const Navlink = ({ href, title}) => {
    return (
        <Link 
            href={href} 
            className="block py-2 px-4 text-[#ADB7BE] text-base font-medium rounded-lg hover:text-white hover:bg-blue-500/10 transition-all duration-200 relative group">
            {title}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </Link>
    )
}

export default Navlink;